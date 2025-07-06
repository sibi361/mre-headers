export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(`Hi I am a Cloudflare Worker serving your request at ${request.url}`);
	},
} satisfies ExportedHandler<Env>;
