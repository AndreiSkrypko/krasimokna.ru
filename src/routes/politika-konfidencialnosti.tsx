import { createFileRoute } from "@tanstack/react-router";

import { legalPagesByPath } from "../data/legal-pages";
import { legalRouteOptions } from "../lib/legal-route-options";

const page = legalPagesByPath["/politika-konfidencialnosti"];

export const Route = createFileRoute("/politika-konfidencialnosti")(legalRouteOptions(page));
