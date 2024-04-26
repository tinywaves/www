import type { IProject } from '../types';

const projectsData: IProject[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    href: 'https://www.google.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.14em" height="1em" viewBox="0 0 256 225">
        <path fill="#8080f2" d="m77.965 80.568l48.57-28.042a3.929 3.929 0 0 1 3.93 0l48.57 28.042A3.932 3.932 0 0 1 181 83.971v56.084c0 1.403-.75 2.7-1.965 3.403l-48.57 28.042a3.929 3.929 0 0 1-3.93 0l-48.57-28.042A3.931 3.931 0 0 1 76 140.055V83.97c.001-1.404.75-2.7 1.965-3.403" />
        <path fill="#4b32c3" d="M254.417 107.417L196.323 6.35C194.213 2.696 190.315 0 186.095 0H69.906c-4.22 0-8.12 2.696-10.23 6.35L1.583 107.194c-2.11 3.655-2.11 8.268 0 11.923l58.093 100.239c2.11 3.654 6.01 5.522 10.23 5.522h116.188c4.22 0 8.119-1.812 10.228-5.467l58.094-100.402c2.112-3.653 2.112-7.938 0-11.592m-48.105 48.6c0 1.485-.894 2.86-2.182 3.604l-73.999 42.693a4.21 4.21 0 0 1-4.186 0l-74.056-42.693c-1.287-.744-2.188-2.118-2.188-3.605V70.628c0-1.487.888-2.86 2.176-3.604l73.995-42.694a4.202 4.202 0 0 1 4.185 0l74.06 42.694c1.289.744 2.195 2.117 2.195 3.604z" />
      </svg>
    ),
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    href: '/blog/the-time-machine',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2.67em" height="1em" viewBox="0 0 512 192">
        <path fill="#00acd7" d="m292.533 13.295l1.124.75c13.212 8.725 22.685 20.691 28.917 35.15c1.496 2.243.499 3.49-2.493 4.237l-5.063 1.296c-11.447 2.949-20.53 5.429-31.827 8.378l-6.443 1.678c-2.32.574-2.96.333-5.428-2.477l-.348-.399c-3.519-3.988-6.155-6.652-10.817-9.03l-.899-.443c-15.705-7.727-30.911-5.484-45.12 3.74c-16.952 10.968-25.677 27.172-25.428 47.364c.25 19.942 13.96 36.395 33.654 39.137c16.951 2.244 31.16-3.739 42.378-16.452c2.244-2.743 4.238-5.734 6.73-9.224h-48.11c-5.235 0-6.481-3.24-4.736-7.478l.864-2.035c3.204-7.454 8.173-18.168 11.4-24.294l.704-1.319c.862-1.494 2.612-3.513 5.977-3.513h80.224c3.603-11.415 9.449-22.201 17.246-32.407c18.198-23.931 40.135-36.396 69.8-41.63c25.427-4.488 49.359-1.995 71.046 12.713c19.694 13.461 31.909 31.66 35.15 55.59c4.237 33.654-5.485 61.075-28.668 84.508c-16.453 16.702-36.645 27.172-59.829 31.908c-6.73 1.247-13.461 1.496-19.942 2.244c-22.685-.499-43.376-6.98-60.826-21.937c-12.273-10.61-20.727-23.648-24.928-38.828a104.937 104.937 0 0 1-10.47 16.89c-17.949 23.683-41.381 38.39-71.046 42.38c-24.43 3.24-47.115-1.497-67.058-16.454c-18.447-13.96-28.917-32.407-31.66-55.34c-3.24-27.173 4.737-51.603 21.19-73.041c17.7-23.184 41.132-37.891 69.8-43.126c22.999-4.16 45.037-1.595 64.936 11.464M411.12 49.017l-.798.178c-23.183 5.235-38.14 19.942-43.624 43.375c-4.488 19.444 4.985 39.138 22.934 47.115c13.71 5.983 27.421 5.235 40.633-1.496c19.694-10.22 30.413-26.175 31.66-47.613c-.25-3.24-.25-5.734-.749-8.227c-4.436-24.401-26.664-38.324-50.056-33.332M116.416 94.564c.997 0 1.496.748 1.496 1.745l-.499 5.983c0 .997-.997 1.745-1.745 1.745l-54.344-.249c-.997 0-1.246-.748-.748-1.496l3.49-6.232c.499-.748 1.496-1.496 2.493-1.496zM121.9 71.63c.997 0 1.496.748 1.247 1.496l-1.995 5.983c-.249.997-1.246 1.495-2.243 1.495l-117.912.25c-.997 0-1.246-.499-.748-1.247l5.235-6.73c.499-.748 1.745-1.247 2.742-1.247zm12.963-22.934c.997 0 1.246.748.748 1.496l-4.238 6.481c-.499.748-1.745 1.496-2.493 1.496l-90.24-.25c-.998 0-1.247-.498-.749-1.246l5.235-6.73c.499-.748 1.745-1.247 2.742-1.247z" />
      </svg>
    ),
  },
];

export default projectsData;