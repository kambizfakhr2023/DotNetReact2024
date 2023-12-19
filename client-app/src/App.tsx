import { useState } from 'react'

import './App.css'
import axios from 'axios'
import { Container, Divider, Header, Icon, List } from 'semantic-ui-react'
function App() {
    const [activities, setActivities] = useState([])
    axios.get('https://localhost:7027/api/Activities')
        .then(response => {
            setActivities(response.data);
            console.log(response);
        })
  return (
      <>
          <Container textAlign='left'>
              <Header>
                  <Icon name="bullhorn" />
                  <Header.Content>
                      Activities
                      <Header.Subheader>Manage your Activities</Header.Subheader>
                  </Header.Content>
              </Header>
              <Divider/>
              <List selection verticalAlign='middle'>
                  {activities.map((activity: any) => (
                      <List.Item key={activity.id}>{activity.title}</List.Item>
                  ))}
              </List>
          </Container>
         
    </>
  )
}

export default App
