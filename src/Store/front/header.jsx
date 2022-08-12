import { memo } from "react";
import { NavLink } from "react-router-dom";
import RenderTip from "../../RenderTip";
import styled from "styled-components";

const HeaderBox = styled.div`
  box-shadow: 1px 1px 5px #d0d2d3;
  position: sticky;
  top: 0;
`;

const LinkList = styled.div`
  display: flex;
  ul {
    margin-left: auto;
    list-style: none;
    display: flex;
    a {
      display: block;
      padding: 0 0.5rem;
      line-height: 40px;
      height: 40px;
      text-decoration: none;
      color: var(--choco-st);
      position: relative;
      transition: all 0.3s;
      &::before {
        content: "";
        position: absolute;
        box-sizing: inherit;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform-origin: center;
        border-bottom: 2px solid transparent;
        transform: scale3d(0, 1, 1);
        transition: transform 0.4s;
      }
      &:hover {
        text-decoration: none;
        color: var(--choco-nd);
        &::before {
          border-bottom: 2px solid var(--choco-nd);
          transform: scale3d(1, 1, 1);
        }
      }
      &.active {
        color: var(--choco-nd);
        &::before {
          content: "";
          position: absolute;
          border-bottom: 2px solid var(--choco-nd);
          transform: scale3d(1, 1, 1);
        }
      }
    }
  }
`;

const initHeader = [
  {
    name: "首頁",
    route: "/",
  },
  {
    name: "商品列表",
    route: "/Products",
  },
];

const Header = () => {
  return (
    <HeaderBox>
      <RenderTip name="Header" />
      <header className="container">
        <LinkList>
          <ul>
            {initHeader.map((item) => (
              <li key={item.route}>
                <NavLink to={item.route}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </LinkList>
      </header>
    </HeaderBox>
  );
};

export default memo(Header, () => true);
