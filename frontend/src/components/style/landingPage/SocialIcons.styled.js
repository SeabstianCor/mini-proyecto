import styled from "styled-components";

export const StyledIcons = styled.div`
  li {
    list-style: none;
  }
  a {
    border: 2px solid #fff;
    border-radius: 25px;
    color: ${({ theme }) => theme.palette.secondary};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.9;
    transform: scale(0.98);
    background-color: ${({ theme }) => theme.palette.accent};
  }

  @media (max-width: 500px) {
    svg {
      height: 1.5rem;
      width: 1.5em;
    }

    li {
      display: flex;
      flex-direction: row;
    }
  }
`;
