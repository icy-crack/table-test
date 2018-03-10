export default {
    name: 'TableExpand',
    functional: true,
    props: {
        row: Object,
        renderfn: [Function, String, Object],
        title: String,
    },
    render: (h, ctx) => {
        const renderfn = ctx.props.renderfn;
        const title = ctx.props.title,
              row = ctx.props.row;
        const params = {
            record: ctx.props.row,
            text: row[title],
            title: title
        }
        if (typeof renderfn == 'function') {
            return renderfn(h, params.text, params.record);
        }
        return (<span>{params.text}</span>)
    }
}