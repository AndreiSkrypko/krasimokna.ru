import { createFileRoute } from "@tanstack/react-router";

import { legalPagesByPath } from "../data/legal-pages";
import { legalRouteOptions } from "../lib/legal-route-options";

const page = legalPagesByPath["/soglasie-na-obrabotku-personalnyh-dannyh"];

export const Route = createFileRoute("/soglasie-na-obrabotku-personalnyh-dannyh")(legalRouteOptions(page));
