import { createFileRoute } from "@tanstack/react-router";

import { legalPagesByPath } from "../data/legal-pages";
import { legalRouteOptions } from "../lib/legal-route-options";

const page = legalPagesByPath["/politika-cookie"];

export const Route = createFileRoute("/politika-cookie")(legalRouteOptions(page));
