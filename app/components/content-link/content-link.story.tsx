import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { ContentLink } from "./content-link"

storiesOf("ContentLink", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="ContentLink" noPad>
        <ContentLink
          onPressLink={() => null}
          bodyTx="infoScreen.photobomb.title"
          headerTx="infoScreen.photobomb.description"
          buttonTx="infoScreen.photobomb.button"
        />
      </UseCase>
    </Story>
  ))
