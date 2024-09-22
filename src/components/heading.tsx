export default function Heading(props: React.ComponentProps<"svg">) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 942 80"
         {...props}
      >
         <path
            id="curve1"
            d="M36.34,145.05s181.97-99.73,437.63-99.73,431.99,99.73,431.69,99.73"
            fill="none"
            stroke="none"
            strokeMiterlimit="10"
         ></path>
         <text textAnchor="middle">
            <textPath xlinkHref="#curve1" fill="currentColor" startOffset="50%">
               {props.children}
            </textPath>
         </text>
      </svg>
   );
}
