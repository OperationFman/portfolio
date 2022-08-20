import { Group, Avatar, Text, Accordion } from "@mantine/core";
import { qualificationsMetaData } from "../../../datasources/QualificationsMetaData";
import { AccordionLabelProps } from "../../types";

const AccordionLabel = (props: AccordionLabelProps) => {
  const { title, image, description } = props;

  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{title}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
};

//TODO: Dark Mode
export const QualificationAccordion = () => {
  const items = qualificationsMetaData.map((item) => (
    <Accordion.Item value={item.title} key={item.title}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
};
