import React from 'react'
import axios from 'axios'

const ACTIONS = {
    GET_DATA: 'date',
    NEXT_PAGE: 'next_page'
}

function reducer(state, action) {
   switch(action.type) {
      case ACTIONS.GET_DATA:
        return { jobs: action.payload.jobs }
      case ACTIONS.NEXT_PAGE:
        return {...state, next_page: action.payload.next_page }
      default:
          return state
   }
}

export default function FetchJobs(params, page) {
   const [state, dispatch] = React.useReducer(reducer, { jobs: [] })

   React.useEffect(() => {
       axios.get('https://jobs.github.com/positions.json', { params: { page: page, ...params }}).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
     })

       axios.get('https://jobs.github.com/positions.json', { params: { page: page + 1, ...params }}).then(res => {
           dispatch({type: ACTIONS.NEXT_PAGE, payload: { next_page: res.data.length !== 0 }})
       })
   }, [params, page])


    return state
}
