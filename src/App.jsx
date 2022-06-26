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

export default function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div className="App h-500 w-500">
        <Tabs aria-label="History of Ancient Rome">
          <TabList>
            <Item key="FoR">Intro</Item>
            <Item key="MaR">Compound Pattern</Item>
            <Item key="Emp">Control Props</Item>
          </TabList>
          <TabPanels>
            <Item key="FoR">
              <Intro />
            </Item>
            <Item key="MaR" styles={{ position: "relative", width: "100%" }}>
              <CompoundComponents />
            </Item>
            <Item key="Emp">
              <ControlPropsPattern />
            </Item>
          </TabPanels>
        </Tabs>
      </div>
    </Provider>
  );
}
