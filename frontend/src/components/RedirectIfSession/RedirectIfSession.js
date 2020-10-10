import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const RedirectIfSession = props => {
    return (
        <>
            { props.token ?
                <Redirect from="/register" to="/home" />
            : props.children }
        </>
    );
}

const mapStateToProps = state => {
    return {
        token: state.token,
    };
};

export default connect(mapStateToProps)(RedirectIfSession);
