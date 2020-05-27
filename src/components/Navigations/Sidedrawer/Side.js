// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';

// function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
//   return (
//     <>
//       <ListItem button dense {...rest}>
//         <ListItemText style={{ paddingLeft: depth * depthStep }}>
//           <span>{label}</span>
//         </ListItemText>
//       </ListItem>
//       {Array.isArray(items) ? (
//         <List disablePadding dense>
//           {items.map((subItem) => (
//             <SidebarItem key={subItem.name} depth={depth + 1} depthStep={depthStep} {...subItem} />
//           ))}
//         </List>
//       ) : null}
//     </>
//   );
// }
// function Sidebar({ items, depthStep, depth }) {
//   return (
//     <div className="sidebar">
//       <List disablePadding dense>
//         {items.map((sidebarItem, index) => (
//           <SidebarItem key={`${sidebarItem.name}${index}`} depthStep={depthStep} depth={depth} {...sidebarItem} />
//         ))}
//       </List>
//     </div>
//   );
// }

export default function Side(items) {
  return (
    <Fragment>
      <ListGroup variant="flush">
        {items.map(({ label, name, items: subItems, ...rest }) => (
          <ListGroup.Item style={{ paddingLeft: 18 }} key={name} button {...rest}>
            {label}
            {Array.isArray(subItems) ? (
              <ListGroup>
                {subItems.map((subItem) => (
                  <ListGroup.Item key={subItem.name} button>
                    {subItem.label}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : null}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  );
}
