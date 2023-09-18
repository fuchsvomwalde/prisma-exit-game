/**
 * TODO: get video streaming work for iOS
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming
 * https://github.com/phoenixinfotech1984/node-content-range/blob/master/server.js
 * https://stackoverflow.com/questions/20347352/html5-video-tag-not-working-in-safari-iphone-and-ipad
 */

import { NextResponse } from "next/server";

// import { stat, createReadStream, read } from "fs";
// import { promisify } from "util";
// import { pipeline } from "stream";
// import path from "path";

// const fileInfo = promisify(stat);

// const sampleVideo = "../../../../../public/cl4551c/r00m.mp4";

// // https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
// function iteratorToStream(iterator: any) {
//   return new ReadableStream({
//     async pull(controller) {
//       const { value, done } = await iterator.next();

//       if (done) {
//         controller.close();
//       } else {
//         controller.enqueue(value);
//       }
//     },
//   });
// }

export async function GET(request: Request) {
  //   /** Calculate Size of file */
  //   const { size } = await fileInfo(path.join(__dirname, sampleVideo));
  //   const range = request.headers.get("range") ?? "";

  //   /** Check for Range header */
  //   if (range) {
  //     /** Extracting Start and End value from Range Header */
  //     let [startRaw, endRaw] = range.replace(/bytes=/, "").split("-");
  //     let start = parseInt(startRaw, 10);
  //     let end = endRaw ? parseInt(endRaw, 10) : size - 1;

  //     if (!isNaN(start) && isNaN(end)) {
  //       start = start;
  //       end = size - 1;
  //     }
  //     if (isNaN(start) && !isNaN(end)) {
  //       start = size - end;
  //       end = size - 1;
  //     }

  //     // Handle unavailable range request
  //     if (start >= size || end >= size) {
  //       // Return the 416 Range Not Satisfiable.
  //       return new NextResponse(undefined, {
  //         status: 416,
  //         headers: {
  //           "Content-Range": `bytes */${size}`,
  //         },
  //       });
  //     }

  //     /** Sending Partial Content With HTTP Code 206 */
  //     const iterator = createReadStream(sampleVideo, { start: start, end: end });
  //     const stream = iteratorToStream(iterator);

  //     return new Response(stream, {
  //       status: 206,
  //       headers: {
  //         "Content-Range": `bytes ${start}-${end}/${size}`,
  //         "Accept-Ranges": "bytes",
  //         "Content-Length": `${end - start + 1}`,
  //         "Content-Type": "video/mp4",
  //       },
  //     });
  //   } else {
  //     const iterator = createReadStream(sampleVideo);
  //     const stream = iteratorToStream(iterator);

  //     return new Response(stream, {
  //       status: 200,
  //       headers: {
  //         "Content-Length": `${size}`,
  //         "Content-Type": "video/mp4",
  //       },
  //     });
  //   }

  return NextResponse.json({});
}

// /**
//  * important: we have to set the runtime paramter in order to get the route work in production
//  */
// export const runtime = "nodejs";
