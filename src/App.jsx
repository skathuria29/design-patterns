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
import { PropGetters } from "./designPatterns/propGetters/PropGetters";
import { StateInitializerPattern } from "./designPatterns/stateInitializerPattern/StateInitializer";
import { SlotPattern } from "./designPatterns/slotPattern/SlotPattern";

export default function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div className="App h-500 w-800">
        <Tabs aria-label="History of Ancient Rome">
          <TabList>
            <Item key="item1">Intro</Item>
            <Item key="item2">Compound Pattern</Item>
            <Item key="item3">Control Props</Item>
            <Item key="item4">Prop Collection</Item>
            <Item key="item5">Prop Getters</Item>
            <Item key="item6">Slot Pattern</Item>
            {/* <Item key="5">Prop Getters</Item> */}
          </TabList>
          <TabPanels>
            <Item key="item1">
              <Intro />
            </Item>
            <Item key="item2" styles={{ position: "relative", width: "100%" }}>
              <CompoundComponents />
            </Item>
            <Item key="item3">
              <ControlPropsPattern />
            </Item>
            <Item key="item4">
              <PropCollection />
            </Item>
            <Item key="item5">
              <PropGetters />
            </Item>
            <Item key="item6">
              <SlotPattern />
            </Item>
          </TabPanels>
        </Tabs>
      </div>
    </Provider>
  );
}
