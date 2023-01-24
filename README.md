## Notes

- Ignoring that components are "Server Components" by default in Next 13
- Queries using setTimeout() to simulate a slow network
- In pages/index.tsx, components wrapped in Suspense are the ones using react-query to fetch their data. The other components have static data.
- Did not implement Search Modal and Notification modal as they are contextual components, they depend a lot on your UX research in terms of how users expect your search bar to behave and what entities show up in the search results. With notifications, I had close to zero context so it would be meaningless to build UI without backing research or context.
- Using React Balancer to ensure all type is readable at all screen sizes. Avoiding orphaned text children.
- Used Suspense mode with react-query. Although not yet SSR with suspense + react-query seems to not be supported yet, it allowed me to not worry about the loading state and the placeholders for the suspended components. More, I also know that no error will be thrown, ever, within the component in this specific case. In a real-world scenario, I would keep track of react-query status and render the relevant components.
