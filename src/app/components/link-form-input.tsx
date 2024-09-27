"use client";

import { SendIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const shortenerSchema = z.object({
  link: z.string().trim().min(1, "Link cannot be empty"),
});

const LinkFormInput = () => {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof shortenerSchema>>({
    resolver: zodResolver(shortenerSchema),
    defaultValues: {
      link: "",
    },
  });

  const onSubmit = (values: z.infer<typeof shortenerSchema>) => {
    setIsSending(true);
    // toast.promise(postChat(values.message), {
    //   loading: "Sending message to Eden...",
    //   success: () => {
    //     form.reset();
    //     return `Sended Successfuly.`;
    //   },
    //   error: (err) => err,
    //   finally: () => setIsSending(false),
    // });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-x-3 pt-3 w-full"
      >
        <FormField
          control={form.control}
          name="link"
          disabled={isSending}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="backdrop-blur-2xl bg-background/65"
                  placeholder="Input your link"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSending}>
          {isSending ? (
            <FaSpinner size={18} className="animate-spin" />
          ) : (
            <SendIcon size={18} />
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LinkFormInput;
