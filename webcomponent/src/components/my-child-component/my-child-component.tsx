import { Component, Prop, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-child-component',
  styleUrl: 'my-child-component.css'
})
export class MyChildComponent {
    @Prop() titlePasswordComponent: string;
    @State() password: string = '';
    @State() color: string = 'black';
    @State() enableBlockButton: boolean = false;
    @State() enableInput: boolean = false;
    @Event() onClickEmitter: EventEmitter;

    render() {
        return (
            <div class="my-child-component">
                <p>Hello from {this.titlePasswordComponent} component!</p>
                <label id="password">Password: </label><br/>
                <input disabled={this.enableInput} 
                    name="password"
                    id="password"
                    type="text" 
                    value={this.password} 
                    onInput={(event) => this.onPasswordChanged(event)}>
                </input>
                <button style={{ display: this.enableBlockButton ? 'inline' : 'none' }}
                        onClick={() => this.blockInput()}
                        class="block-button">
                        Block password
                </button>
                <br/>
                <div class="password" style={{ "background-color": this.color }}></div>
            </div>
        )
    }

    calculateColor() {
        var lowerCase = /[a-z]/.test(this.password);
        var upperCase = /[A-Z]/.test(this.password);
        var number = /[0-9]/.test(this.password);
        var conditions = [lowerCase, upperCase, number].filter(value => value).length;
        if (conditions === 3) {
            this.color = 'green';
            this.enableBlockButton = true;
        } else if (conditions === 0) {
            this.color = 'black';  
        } else {
            this.color = 'orange';   
        }
    }

    onPasswordChanged(event) {
        this.password = event.target.value;
        event.stopPropagation();
        this.calculateColor();
    }

    blockInput() {
        this.enableInput = true;
        this.onClickEmitter.emit({ data: 'Se ha clickeado en el botón bloquear' });
    }
}