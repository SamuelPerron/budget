import React, { useEffect, useState } from 'react';
import './styles.scss';

const Message = props => {
    const [classes, setClasses] = useState('');
    const [body, setBody] = useState('');

    const sleep = ms => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function changeStateMessage(newState) {
        await sleep(2500)
        setClasses(props.type + ' ' + newState);
        setBody('');
    }

    useEffect(() => {
        if (!classes.includes('close')) {
            changeStateMessage('close');
        }
    }, [classes]);

    useEffect(() => {
        setBody(props.message);
    }, [props.message]);

    useEffect(() => {
        if (body !== '') {
            setClasses(props.type);
        }
    }, [body]);

    return (
        <div id="message" className={classes}>
            {props.message}
        </div>
    );
}

export default Message;
