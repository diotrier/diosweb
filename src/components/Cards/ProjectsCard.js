import React from "react";
import { Image, Card, Tags, Details, Title, Date, Description, Members, Button, Avatar } from "./CardStyles";
import { projects } from "@/constants/Bio";

const ProjectCard = (props) => {


  return (
    <Card>
      <Image src={props.project.image} alt="img" />

      {/* <Tags>{props.project.tags}</Tags> */}
      <Details>
        <Title>{props.project.title}</Title>
        <Description>{props.project.description}</Description>
      </Details>

      <Button target="_blank" href={props.project.github}>
        View Code
      </Button>
      <Button target="_blank" href={props.project.webapp}>
        Demo
      </Button>
    </Card>
  );
};

export default ProjectCard;