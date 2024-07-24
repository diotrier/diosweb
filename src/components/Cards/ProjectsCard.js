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
        <Date>{props.project.date}</Date>
        <Description>{props.project.description}</Description>
      </Details>

      <Button target="_blank">
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCard;