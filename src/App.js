import React from 'react'
import './App.css';
import fetchJobs from './FetchJobs'
import Jobs from './Jobs'
import Pages from './Pages'
import FormSearch from './FormSearch'
import { Container } from 'react-bootstrap'


function App() {
  const [params, setParams] = React.useState({})
  const [page, setPage] = React.useState(1)

  const handleChange = (e) => {
     const param = e.target.name
     const value = e.target.value
     setPage(1)
     setParams(prevParams => {
         return  {...prevParams, [param]: value }
      })
  }

  const { jobs, nextPage } = fetchJobs(params, page)

  return (
    <Container>
      <h1>Git Hub Jobs</h1>
      <FormSearch params={params} paramChange={handleChange}/>
      {jobs.map(job => <Jobs key={job.id} jobs={job}/> )}
      {jobs.length > 50 ? <Pages page={page} setPage={setPage} nextPage={nextPage}/> : null} 
    </Container>
  );
}

export default App;
