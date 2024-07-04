import { trpc } from "@web/trpc";

export default async function Index() { 
  // const response = await trpc.hello.query({name: 'nothing'})
  return (
    <div>
      {/* {response} */}
      HELLO WORLD
    </div>
  );
}
