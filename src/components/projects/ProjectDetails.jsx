import React from "react";
import { Button, Icon, Item } from "semantic-ui-react";

const ProjectDatails = props => {
  const id = props.match.params.id;

  return (
    <Item.Group divided>
      <Item>
        <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

        <Item.Content>
          <Item.Header as="a">Watchmen --- {id}</Item.Header>
          <Item.Meta>
            <span className="cinema">IFC</span>
          </Item.Meta>
          <Item.Description>
            ;asdlkdjfj;askdfj;sadkjfj ;lkj; lk;kjsdajkfhaksd jasdf kljhsadfl
            alksjjdhflaksdj askjdjfhpwaiouhyefpiovchjmnc
          </Item.Description>
          <Item.Extra>
            <Button primary floated="right">
              Buy tickets
              <Icon name="right chevron" />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
export default ProjectDatails;
