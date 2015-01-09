/* React组件名:
 * Ineo, 我即是唯一
 */

/* css class:
 * thich 一行
 * 一行禅师
 * Thich Nhat Hanh,Ven Thich Nhat Hanh,Zen master thich nhat hanh
 */

var WriteActions = require('../config/WriterActions');

var Ineo = React.createClass({
    componentDidMount: function(){
        this.input = this.refs['ineo-input'].getDOMNode();
    },
    render: function(){
        return (
            <div className="ineo">
                <textarea className="ineo-input"
                    ref="ineo-input"
                    onKeyDown={this._onKeyDown}
                />
                <div className="size-gen" />
            </div>
        );
    },
    _onKeyDown: function(e){
        if(e.keyCode === 13){
            e.preventDefault();
            WriteActions.finishThich(this.input.value);
            this.input.value = '';
        }
    }
});

module.exports = Ineo;