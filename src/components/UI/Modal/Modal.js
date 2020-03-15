import React, {Component} from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliarily/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

// const modal = (props) => (
//   <Aux>
//     <Backdrop show={props.show} clicked={props.modalClosed}/>
//   <div
//       className={classes.Modal}
//       style={{
//         transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//         opacity: props.show ? '1' : '0'
//       }}
//   >
//     {props.children}
//   </div>
//   </Aux>
// );
//
// export default modal;

class Modal extends Component {

    // -- Performance improvement
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Modal.js] componentWillUpdate');
    }
    // -- Performance improvement

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    };
}

export default Modal;