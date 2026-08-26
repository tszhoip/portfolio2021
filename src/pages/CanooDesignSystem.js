import React from 'react';
import cd1 from '../assets/canood/CD-1- 1.jpg';
import cd2 from '../assets/canood/CD-1- 2.jpg';
import cd3 from '../assets/canood/CD-1- 3.jpg';
import cd4 from '../assets/canood/CD-1- 4.jpg';
import cd5 from '../assets/canood/CD-1- 5.jpg';
import cd6 from '../assets/canood/CD-1- 6.jpg';
import cd7 from '../assets/canood/CD-1- 7.jpg';
import cd8 from '../assets/canood/CD-1- 8.jpg';
import cd9 from '../assets/canood/CD-1- 9.jpg';
import cd10 from '../assets/canood/CD-1- 10.jpg';
import cd11 from '../assets/canood/CD-1- 11.jpg';
import cd12 from '../assets/canood/CD-1- 12.jpg';
import cd13 from '../assets/canood/CD-1- 13.jpg';
import cd14 from '../assets/canood/CD-1- 14.jpg';
import cd15 from '../assets/canood/CD-1- 15.jpg';
import { BlockImg, Blockitem } from '../component/Block';
import { Container, Wrap, Text } from '../component/Core';
import { ThemeProvider } from "styled-components";
import { base } from '../theme';

function CanooDesignSystem() {
  const ImgSet = [
    cd1,
    cd2,
    cd3,
    cd4,
    cd5,
    cd6,
    cd7,
    cd8,
    cd9,
    cd10,
    cd11,
    cd12,
    cd13,
    cd14,
    cd15
  ]

  return (
    <ThemeProvider theme={base}>
      <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems="center">
        <Container width={[1]} flexWrap="wrap" maxWidth={["1440px"]} pb={[0, 4, 4, 5]}>
          {/* Left Column - Project Info */}
          <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
            <Blockitem
              title="Title"
              body="Canoo, Design System"
            />
            <Blockitem
              title="Role"
              body="Design Lead"
            />
            <Blockitem
              title="Deliverable"
              body="Art Direction, Design System"
            />
          </Container>

          {/* Right Column - Description */}
          <Container width={[1, 1 / 2, 1 / 2, 1 / 2]} flexDirection={[1]} flexWrap="wrap">
            <Blockitem
              title="Project / EN"
              body="To enhance Canoo's design and development processes, we aim to establish a comprehensive design system rooted in functionalism. By addressing the current challenges of misalignment, slow turnaround times, and inconsistent aesthetics, we can streamline workflows, improve code quality, and ensure adherence to our company's minimalist design philosophy. Our solution involves creating a centralized repository of reusable UI components, developing a detailed style guide, implementing a version control system, and providing ongoing training and support. This approach will foster collaboration between design and development teams, accelerate project timelines, and deliver high-quality products that align with our brand identity."
            />
            <Blockitem
              title="项目 / CN"
              body="为了提升 Canoo 的设计和开发流程，我们旨在建立一个基于功能主义的综合设计系统。通过解决当前存在的错位、缓慢的周转时间和不一致的美学问题，我们可以简化工作流程，提高代码质量，并确保遵守公司简约的设计理念。我们的解决方案包括创建一个集中的可重用 UI 组件库、开发详细的样式指南、实施版本控制系统以及提供持续的培训和支持。这种方法将促进设计和开发团队之间的协作，加快项目时间表，并交付与我们品牌形象相符的高质量产品。"
            />
          </Container>
        </Container>

        {/* Image Gallery */}
        {ImgSet.map((image, index) => (
          <BlockImg key={index} image={image} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default CanooDesignSystem;
