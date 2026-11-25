import { createFileRoute } from "@tanstack/react-router";

import { legalPagesByPath } from "../data/legal-pages";
import { legalRouteOptions } from "../lib/legal-route-options";

const page = legalPagesByPath["/polzovatelskoe-soglashenie"];

export const Route = createFileRoute("/polzovatelskoe-soglashenie")(legalRouteOptions(page));
