import { MantineProvider, Container } from '@mantine/core';

 export function App1() {
  return (
    <MantineProvider
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
      <Container size="sm">

  

      </Container>
    </MantineProvider>
  );
}