/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/r7elRfkyTAS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { CartesianGrid, XAxis, Line, LineChart, Bar, BarChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import Image from "next/image";

export function Assistant() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="bg-background border-r flex flex-col gap-4 p-6 w-[300px]">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Snowboard Trick Advisor</h2>
          <Button variant="ghost" size="icon">
            {/* <SettingsIcon className="w-5 h-5" /> */}
          </Button>
        </div>
        <Tabs defaultValue="stats">
          <TabsList>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="tricks">Tricks</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="stats">
            <div className="grid gap-4">
              <Card>
                <CardHeader className="w-full">
                  <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <LinechartChart className="aspect-[16/9]" /> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Trick Difficulty</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <BarchartChart className="aspect-[16/9]" /> */}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tricks">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trick Library</CardTitle>
                  <CardDescription>
                    Browse and filter snowboard tricks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Trick</TableHead>
                        <TableHead>Difficulty</TableHead>
                        <TableHead>Rotation</TableHead>
                        <TableHead>Grab</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Ollie</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>None</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Frontside 180</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>180</TableCell>
                        <TableCell>Indy</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Backside 360</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>360</TableCell>
                        <TableCell>Mute</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Frontside Rodeo</TableCell>
                        <TableCell>7</TableCell>
                        <TableCell>540</TableCell>
                        <TableCell>Stalefish</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trick Tutorials</CardTitle>
                  <CardDescription>
                    Watch and learn snowboard tricks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                      <video className="w-full h-full object-cover">
                        <source src="/video1.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white"
                        >
                          {/* <PlayIcon className="w-8 h-8" /> */}
                        </Button>
                      </div>
                    </div>
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                      <video className="w-full h-full object-cover">
                        <source src="/video2.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white"
                        >
                          {/* <PlayIcon className="w-8 h-8" /> */}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="bg-background border-b p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Snowboard Trick Advisor</h1>
          <Button variant="ghost" size="icon">
            {/* <HandHelpingIcon className="w-5 h-5" /> */}
          </Button>
        </header>
        <div className="flex-1 flex">
          <div className="bg-background border-r p-6 w-[400px] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Chat with AI</h2>
              <Button variant="ghost" size="icon">
                {/* <MaximizeIcon className="w-5 h-5" /> */}
              </Button>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="AI Avatar" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                    <p>
                      Hello! I'm your AI Snowboard Trick Advisor. How can I help
                      you today?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <div className="bg-primary rounded-lg p-4 max-w-[80%] text-primary-foreground">
                    <p>
                      I'm looking for some new trick ideas to try on my
                      snowboard. Can you suggest some cool tricks I should
                      learn?
                    </p>
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="User Avatar"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="AI Avatar" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-4 max-w-[80%]">
                    <p>
                      Absolutely! Based on your skill level and the tricks
                      you've already mastered, I'd recommend trying a Frontside
                      180, a Backside 360, and a Stalefish Grab. Those are all
                      really fun and visually impressive tricks that will take
                      your snowboarding to the next level.
                    </p>
                    <p>
                      Would you like me to provide some video tutorials or tips
                      on how to learn those tricks safely and effectively?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <div className="bg-primary rounded-lg p-4 max-w-[80%] text-primary-foreground">
                    <p>
                      Yes, that would be great! I'd love to see some tutorial
                      videos and get your advice on the best way to learn those
                      tricks.
                    </p>
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="User Avatar"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            <div className="relative">
              <Textarea
                placeholder="Type your message..."
                className="w-full rounded-lg border border-neutral-400 p-3 pr-16 resize-none"
                rows={1}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 right-3"
              >
                {/* <SendIcon className="w-5 h-5" /> */}
              </Button>
            </div>
          </div>
          <div className="flex-1 p-6 overflow-auto">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trick Suggestion</CardTitle>
                  <CardDescription>
                    Based on your skill level and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                          src="/placeholder.svg"
                          alt="Frontside 180"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Frontside 180</h3>
                        <p className="text-muted-foreground">Difficulty: 3</p>
                        <p>
                          A classic trick that's great for building confidence
                          and style on the mountain.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                          src="/placeholder.svg"
                          alt="Backside 360"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Backside 360</h3>
                        <p className="text-muted-foreground">Difficulty: 5</p>
                        <p>
                          A classic spin that looks great and will impress your
                          friends.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                        <Image
                          src="/placeholder.svg"
                          alt="Stalefish Grab"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Stalefish Grab</h3>
                        <p className="text-muted-foreground">Difficulty: 7</p>
                        <p>
                          A stylish grab that will add some flair to your
                          tricks.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Trick Analysis</CardTitle>
                  <CardDescription>
                    Video analysis of your latest trick attempt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                    <video className="w-full h-full object-cover">
                      <source src="/trick-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white"
                      >
                        {/* <PlayIcon className="w-8 h-8" /> */}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">Frontside 180</h3>
                    <p>
                      Nice work on that Frontside 180! Here are a few tips to
                      help you land it more consistently:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>
                        Make sure to keep your shoulders square and your head up
                        throughout the rotation
                      </li>
                      <li>
                        Bend your knees and use your legs to generate the power,
                        not just your upper body
                      </li>
                      <li>
                        Commit fully to the rotation and don't be afraid to go
                        for it
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4">
                      Try Again
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function BarchartChart(props) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//         className="min-h-[300px]"
//       >
//         <BarChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
//         </BarChart>
//       </ChartContainer>
//     </div>
//   )
// }

// function HandHelpingIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
//       <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
//       <path d="m2 13 6 6" />
//     </svg>
//   )
// }

// function LinechartChart(props) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//       >
//         <LineChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//           margin={{
//             left: 12,
//             right: 12,
//           }}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             axisLine={false}
//             tickMargin={8}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
//         </LineChart>
//       </ChartContainer>
//     </div>
//   )
// }

// function MaximizeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 3H5a2 2 0 0 0-2 2v3" />
//       <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
//       <path d="M3 16v3a2 2 0 0 0 2 2h3" />
//       <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
//     </svg>
//   )
// }

// function PlayIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="6 3 20 12 6 21 6 3" />
//     </svg>
//   )
// }

// function SendIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m22 2-7 20-4-9-9-4Z" />
//       <path d="M22 2 11 13" />
//     </svg>
//   )
// }

// function SettingsIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }
