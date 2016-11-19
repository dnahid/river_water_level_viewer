var Greeter = React.createClass({
    getDefaultProps: function(){
        return{
            name : 'Nahid',
            message : 'This is a default message'
        }
    },
    render : function(){
        var name = this.props.name;
        var message = this.props.message;
        return (
        <div>
            <h1>Hellow {name}</h1>
            <p>{message}</p>
        </div>
        );
    }
});

var message = 'This is a message';
ReactDOM.render(
    <Greeter name="Dipu" message = {message}/>,
    document.getElementById('app')
);