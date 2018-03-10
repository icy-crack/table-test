<template>
  <div id="app">
    <Table :columns="columns" :datasource="datasource"></Table>
  </div>
</template>

<script>
import Table from './components/table/table.vue'
import Btn from './components/table/test.vue'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (h, text) => <a href="#">{text}</a>
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Action',
  key: 'action',
  render: (h, text, record) => {
    return <Btn text={record.name}/>
  }
}]

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}]

export default {
  name: 'App',
  components: {
    Table
  },
  data () {
    return {
      datasource: data,
      columns
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
