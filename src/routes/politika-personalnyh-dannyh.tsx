import { createFileRoute } from "@tanstack/react-router";

import { legalPagesByPath } from "../data/legal-pages";
import { legalRouteOptions } from "../lib/legal-route-options";

const page = legalPagesByPath["/politika-personalnyh-dannyh"];

export const Route = createFileRoute("/politika-personalnyh-dannyh")(legalRouteOptions(page));
