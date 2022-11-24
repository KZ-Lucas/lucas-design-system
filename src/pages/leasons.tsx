import Text from "@/components/Atoms/Text";
import LeasonsLayout from "@/components/Organisms/layouts/leasons";
import colors from "@/constants/colors";
import styled from "@emotion/styled";
import { useCallback } from "react";

const Leasons = () => {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <LeasonsLayout onSubmit={handleSubmit}>
      <LeasonsLayout.Header align="center">
        <Text typography="base" color="white">
          문제 풀기
        </Text>
      </LeasonsLayout.Header>

      <LeasonsLayout.Body>
        <Sidebar>
          {Array.from({ length: 3000 }, (_, i) => (
            <SidebarItem>
              <Text typography="base" color="blueGray.200">
                객관식 {i}
              </Text>
            </SidebarItem>
          ))}
        </Sidebar>
      </LeasonsLayout.Body>

      <LeasonsLayout.Footer></LeasonsLayout.Footer>
    </LeasonsLayout>
  );
};

export default Leasons;

const Sidebar = styled.ul`
  width: 140px;
  flex-basis: 12.5rem;
  border-right: 1px solid ${colors.blueGray[800]};
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
`;

const SidebarItem = styled.li`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  transition: all 0.08s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${colors.blueGray[600]};
    border-radius: 0.0625rem;
    box-shadow: 0.5rem 0 0 0.25rem ${colors.blueGray[600]},
      -0.5rem 0 0 0.25rem ${colors.blueGray[600]};
  }
`;
