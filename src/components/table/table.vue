<template>
    <div class="table-wrapper">
        <div class="ta-head">
            <table border="1">
                <thead>
                    <tr>
                        <td v-for="head in columns" :key="head.key">
                            {{ head.title }}
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="ta-body">
            <table border="1">
                <tbody>
                    <tr v-for="row in datasource" :key="row.key">
                        <td v-for="key in keys" :key="key">
                            <Expand :title="key" :row="row" :renderfn="renders[key]"></Expand>  
                        </td>   
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Expand from './expand'

    export default {
        name: 'table',
        props: ['datasource', 'columns'],
        components: {
            Expand
        },
        computed: {
            heads () {
                
            },
            keys () {
                return this.columns.map(item => item.key);
            },
            _columns () {
                let _columns = {};
                this.columns.map(obj => {
                    _columns[obj.key] = obj;
                })
                return _columns;
            },
            renders () {
                let _renders = {};
                this.columns.map(obj => {
                    _renders[obj.key] = obj.render || null;
                })
                return _renders;
            }
        },
        methods: {
            getRenderFn (key) {
                return this._columns[key].render || null;
            }
        },
    }
</script>

<style scoped>

table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 50%;
}
tr {
    height: 40px;  
}

</style>