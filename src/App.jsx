import { Intro } from "./designPatterns/intro";
import "./styles.css";
import { CompoundComponents } from "./designPatterns/compoundComponents/CompoundComponents";
import {
  Item,
  TabList,
  TabPanels,
  Tabs,
  defaultTheme,
  Provider
} from "@adobe/react-spectrum";
import { ControlPropsPattern } from "./designPatterns/controlProps/ControlPropsPattern";
import { PropCollection } from "./designPatterns/propCollection/PropCollection";

export default function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div className="App h-500 w-500">
        <Tabs aria-label="History of Ancient Rome">
          <TabList>
            <Item key="0">Intro</Item>
            <Item key="1">Compound Pattern</Item>
            <Item key="2">Control Props</Item>
            <Item key="3">Prop Collection</Item>
          </TabList>
          <TabPanels>
            <Item key="0">
              <Intro />
            </Item>
            <Item key="1" styles={{ position: "relative", width: "100%" }}>
              <CompoundComponents />
            </Item>
            <Item key="2">
              <ControlPropsPattern />
            </Item>
            <Item key="3">
              <PropCollection />
            </Item>
          </TabPanels>
        </Tabs>
      </div>
    </Provider>
  );
}
