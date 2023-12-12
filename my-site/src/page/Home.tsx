import { useQuery } from "@tanstack/react-query";
import { fetchAttractions } from "../api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  UserName: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  Paccword: z.string(),
  RememberMe: z.boolean(),
  CakeTake: z.boolean(),
});

function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      UserName: "",
      Paccword: "",
      RememberMe: false,
      CakeTake: true,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchAttractions,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div className="flex justify-center">
      {/* <Button>Click me</Button> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="UserName"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-center items-center">
                  <FormLabel className="w-1/4">帳號</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Paccword"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-center items-center">
                  <FormLabel className="w-1/4">密碼</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default Home;
