"use client";

import paths from "@/paths";
import Link from "next/link";
import { usePage } from "@/hooks/page";
import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";

export default function SignUp() {
  usePage({ title: "Sign Up" });

  return (
    <div className="flex w-full min-h-[100vh] items-center justify-center">
      <div className="max-w-[300px] w-full">
        <Title className="text-center">Sign Up</Title>

        <Form validateTrigger="onSubmit">
          <Form.Item
            name={["email"]}
            rules={[
              { required: true, message: "Please input email" },
              { type: "email", message: "Please input valid email" },
            ]}
          >
            <Input placeholder="Email" className="w-full" />
          </Form.Item>

          <Form.Item name={["password"]} rules={[{ required: true, message: "Please input password" }]}>
            <Input.Password placeholder="Password" className="w-full" />
          </Form.Item>

          <Button type="primary" block className="mb-3">
            Submit
          </Button>
        </Form>

        <div>
          Already have account?{" "}
          <Link href={paths.signIn}>
            <Button type="link" className="p-0">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
