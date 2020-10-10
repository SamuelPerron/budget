import React, { useEffect, useState } from 'react';
import './styles.scss';

const Message = props => {
    const [classes, setClasses] = useState('');

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function changeStateMessage(newState) {
        await sleep(2500)
        setClasses(props.type + ' ' + newState);
    }

    useEffect(() => {
        if (!classes.includes('close')) {
            changeStateMessage('close');
        }
    }, [classes]);

    useEffect(() => {
        setClasses(props.type);
    }, [props.message]);

    return (
        <div id="message" className={classes}>
            {props.message}
        </div>
    );
}

export default Message;
