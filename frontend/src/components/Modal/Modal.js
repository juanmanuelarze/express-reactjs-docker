import './styles.css';
import logo from './../../logo.svg';
import { useState } from 'react';

const Modal = ({task, modalState, close, complete})=>{

    const [loading, setLoading] = useState(false);
    const [completeDisabled, setCompleteDisabled] = useState(false);

    if(!modalState)
        return null;

    const innerComplete = async ()=>{

        setLoading(true);
        setCompleteDisabled(true);

        await complete();

        setLoading(false);
        setCompleteDisabled(false);
        close();

    }

    return (
        <div className="modal-container">
            <div className="modal-box">
                <header className="modal-header">
                    <div className="modal-task-id">Task #{task.id}</div>
                    <div className="modal-task-uuid">{task.uuid}</div>
                </header>
                <div className="modal-task-title">{task.title}</div>
                <footer className="modal-footer">
                    {loading && 
                        <img src={logo} className="loading" alt="logo" />
                    }
                    {task.state === 0 && 
                        <button disabled={completeDisabled} className="modal-button complete" onClick={innerComplete}>COMPLETE</button>
                    }
                    <button className="modal-button close" onClick={close}>CLOSE</button>
                </footer>
            </div>
            <div onClick={close} className="overlay"></div>
        </div>
    );

}

export default Modal;