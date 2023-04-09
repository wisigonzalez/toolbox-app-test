# Toolbox app test
- Sequence diagram >>> https://cs1.ssltrust.me/s/6u9aC5hCTEhTpT1
- Markup page >>> https://cs1.ssltrust.me/s/ECH9VusiMmi3ac1

## Stack
- Frontend
  - [React.js](https://reactjs.org/)
  - [Webpack.js](https://webpack.js.org/)
  - [React Bootstrap](https://react-bootstrap.github.io/)
  - [Jest](https://jestjs.io/)
- Backend
  - [Express.js](https://expressjs.com/)

## Highlights
- Atomic design
- Singleton pattern
- Custom hooks
- Docker
- Unit testing
- Custom labels in repository
- Follow guidelines

## Requeriments
Mandatory
- Node >= 16.20.0

Optional
- Docker >= 23.0.3

## Local configuration
If you wish run the project without docker, then:
1. npm install
2. npm start
3. go to `http://localhost:3000/`
4. see the magic

If you wish run the project with docker, then:
1. docker-compose up
2. go to `http://localhost:3000/`
3. see the magic

## Folder structure
Explanation of hierarchies in files and layers.
    toolbox-app-test/
      ├── public/                          # Favicon, manifest, robots folder
      └── src/                             # Application folder
          ├── components/                  # Components folder (Atomic design strategy)
          ├── constants/                   # General constants folder
          ├── hooks/                       # Custom hooks folder
          └── providers/                   # API provider folder

## Branches
- `main`
- `feature/initial-configurations` >>> initial configurations
- `feature/create-mock-page` >>> markup page without integrations
- `feature/integrate-table-with-api` >>> markup page with integrations
- `feature/filter-information` >>> markup page with file filtering integrations
- `enhancement/docker-and-documentation` >>> dockerize and documentation

## Other details
- N/A

# License
MIT