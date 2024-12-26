
// import { signOut } from "../../../auth";
// import ROUTES from "../../../constants/routes";

// Components
// import { Button } from "@/components/ui/button";

// In this component we will use servers side sing out with auth() amd form action attribute
export default async function Home() {

  return (
    <>
      <div className="flex flex-col pt-[100px]">
        <h1 className="h1-bold font-space-grotesk">Welcome to the world of NextJS</h1>
        <h2 className="h2-bold">Welcome to the world of NextJS</h2>

        {/* <form 
          className="px-10 mt-10" 
          action={
            async() => {
              "use server";

              await signOut({redirectTo: ROUTES.SIGN_IN});
            }
          }
        >
          <Button type="submit">Log Out</Button>
        </form> */}
      </div>
    </>
  );
}
