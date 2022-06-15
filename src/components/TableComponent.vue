<template>
  <div id="tableBody">
    <table>
      <thead>
        <tr id="table_line_title">
          <th>Age</th>
          <th>
            <div id="sort_FN">
              First Name
              <div id="sort_FN_btn">
                <button class="btn_sort" v-on:click="sortASCFirstName">🢑</button>
                <button class="btn_sort" v-on:click="sortDESCFirstName">🢓</button>
              </div>
            </div>
          </th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody id="content_table">
        <tr v-for="item in items" :key="item.id">
          <td v-text="item.age"></td>
          <td v-text="item.first_name"></td>
          <td v-text="item.last_name"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableBody',
  data () {
    return {
      items: [
        {
          id: 1,
          age: 21,
          first_name: 'Philippe',
          last_name: 'Hernandez-alarcia'
        },
        { id: 2, age: 21, first_name: 'Stevie', last_name: 'Lavenu' },
        { id: 3, age: 21, first_name: 'Capucine', last_name: 'Fortin' },
        { id: 4, age: 24, first_name: 'Ningxi', last_name: 'Chen' }
      ]
    }
  },
  methods: {
    sortASCFirstName () {
      let rows, switching, i, x, y, shouldSwitch
      const table = document.getElementById('content_table')
      switching = true

      while (switching) {
        switching = false
        rows = table.rows
        for (i = 0; i < rows.length - 1; i++) {
          shouldSwitch = false

          x = rows[i].getElementsByTagName('TD')[1]
          y = rows[i + 1].getElementsByTagName('TD')[1]

          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true
            break
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
        }
      }
    },
    sortDESCFirstName () {
      let rows, switching, i, x, y, shouldSwitch
      const table = document.getElementById('content_table')
      switching = true

      while (switching) {
        switching = false
        rows = table.rows
        for (i = 0; i < rows.length - 1; i++) {
          shouldSwitch = false

          x = rows[i].getElementsByTagName('TD')[1]
          y = rows[i + 1].getElementsByTagName('TD')[1]

          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true
            break
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
#sort_FN {
  display: flex;
  align-items: center;
}

#sort_FN_btn {
  display: grid;
  margin-left: 5px;
}

.btn_sort {
  background-color: transparent;
  border: none;
  font-size: x-large;
}

.btn_sort:hover {
  background-color:rgb(241, 232, 221);
}

#tableBody {
  padding: 20px 100px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover:not(#table_line_title) {
  background-color: #f3e7e7;
}
</style>
