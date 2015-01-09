
var WriterStore = require('./store/WriterStore');

var Paragraph = require('./component/Paragraph.react.js');
var Ineo = require('./component/Ineo.react');

var App = React.createClass({
    getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function(){
        this.getStoreData();
        WriterStore.addChangeListener(this.getStoreData);
    },
    componentWillUnmount: function(){
        WriterStore.removeChangeListener(this.getStoreData);
    },
    componentDidUpdate: function(){
        //console.log('owner updated');
    },
    render: function() {
        var data = this.state.data;
        var nodes = data.map(function(d, i){
                return <Paragraph key={d.id} data={d} />;
        }.bind(this));

        return (
            <div>
                <h2>Letter of Akari</h2>
                {nodes}
                <Ineo extraClass={[]}/>
            </div>
        );
    },
    getStoreData: function(){
        this.setState({
            data: WriterStore.getAll()
        });
    }
});

// module.exports = App;
React.render(<App />, document.querySelector('#ctn'));