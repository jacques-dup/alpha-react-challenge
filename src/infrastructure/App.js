import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Question1, Question2, Question3 } from "../questions";


export const App = () => {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Question 1</Tab>
          <Tab>Question 2</Tab>
          <Tab>Question 3</Tab>
        </TabList>

        <TabPanel>
          <Question1 />
        </TabPanel>
        <TabPanel>
          <Question2 />
        </TabPanel>
        <TabPanel>
          <Question3 />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
