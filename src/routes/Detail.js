import React from 'react'
import { connect } from 'react-redux'

function Detail({todo}) {
    const createdAt = new Date(parseInt(todo?.id))

    return (
        <>
            <h1>{todo?.text}</h1>
            <h5>{createdAt.toDateString()}</h5>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const {
        match:{
            params: {id}
        }} = ownProps;
    return {todo: state.find(todo => todo.id === parseInt(id))}
}

export default connect(mapStateToProps) (Detail)
