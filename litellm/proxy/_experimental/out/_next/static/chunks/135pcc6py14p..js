(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,492030,e=>{"use strict";var t=e.i(121229);e.s(["CheckOutlined",()=>t.default])},447566,e=>{"use strict";e.i(247167);var t=e.i(931067),i=e.i(271645);let r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};var o=e.i(9583),a=i.forwardRef(function(e,a){return i.createElement(o.default,(0,t.default)({},e,{ref:a,icon:r}))});e.s(["ArrowLeftOutlined",0,a],447566)},166406,e=>{"use strict";var t=e.i(190144);e.s(["CopyOutlined",()=>t.default])},596239,e=>{"use strict";e.i(247167);var t=e.i(931067),i=e.i(271645);let r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};var o=e.i(9583),a=i.forwardRef(function(e,a){return i.createElement(o.default,(0,t.default)({},e,{ref:a,icon:r}))});e.s(["LinkOutlined",0,a],596239)},339019,865361,e=>{"use strict";var t,i,r=((t={}).AUDIO_SPEECH="audio_speech",t.AUDIO_TRANSCRIPTION="audio_transcription",t.IMAGE_GENERATION="image_generation",t.VIDEO_GENERATION="video_generation",t.CHAT="chat",t.RESPONSES="responses",t.IMAGE_EDITS="image_edits",t.ANTHROPIC_MESSAGES="anthropic_messages",t.EMBEDDING="embedding",t),o=((i={}).IMAGE="image",i.VIDEO="video",i.CHAT="chat",i.RESPONSES="responses",i.IMAGE_EDITS="image_edits",i.ANTHROPIC_MESSAGES="anthropic_messages",i.EMBEDDINGS="embeddings",i.SPEECH="speech",i.TRANSCRIPTION="transcription",i.A2A_AGENTS="a2a_agents",i.MCP="mcp",i.REALTIME="realtime",i.INTERACTIONS="interactions",i);let a={image_generation:"image",video_generation:"video",chat:"chat",responses:"responses",image_edits:"image_edits",anthropic_messages:"anthropic_messages",audio_speech:"speech",audio_transcription:"transcription",embedding:"embeddings"};e.s(["EndpointType",()=>o,"getEndpointType",0,e=>{if(console.log("getEndpointType:",e),Object.values(r).includes(e)){let t=a[e];return console.log("endpointType:",t),t}return"chat"}],865361),e.s(["generateCodeSnippet",0,e=>{let t,{apiKeySource:i,accessToken:r,apiKey:a,inputMessage:n,chatHistory:s,selectedTags:l,selectedVectorStores:c,selectedGuardrails:p,selectedPolicies:u,selectedMCPServers:m,mcpServers:d,mcpServerToolRestrictions:g,selectedVoice:f,endpointType:_,selectedModel:h,selectedSdk:b,proxySettings:y}=e,$="session"===i?r:a,v=window.location.origin,x=y?.LITELLM_UI_API_DOC_BASE_URL;x&&x.trim()?v=x:y?.PROXY_BASE_URL&&(v=y.PROXY_BASE_URL);let E=n||"Your prompt here",k=E.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n"),C=s.filter(e=>!e.isImage).map(({role:e,content:t})=>({role:e,content:t})),S={};l.length>0&&(S.tags=l),c.length>0&&(S.vector_stores=c),p.length>0&&(S.guardrails=p),u.length>0&&(S.policies=u);let w=h||"your-model-name",I="azure"===b?`import openai

client = openai.AzureOpenAI(
	api_key="${$||"YOUR_LITELLM_API_KEY"}",
	azure_endpoint="${v}",
	api_version="2024-02-01"
)`:`import openai

client = openai.OpenAI(
	api_key="${$||"YOUR_LITELLM_API_KEY"}",
	base_url="${v}"
)`;switch(_){case o.CHAT:{let e=Object.keys(S).length>0,i="";if(e){let e=JSON.stringify({metadata:S},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();i=`,
    extra_body=${e}`}let r=C.length>0?C:[{role:"user",content:E}];t=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.chat.completions.create(
    model="${w}",
    messages=${JSON.stringify(r,null,4)}${i}
)

print(response)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.chat.completions.create(
#     model="${w}",
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "${k}"
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": f"data:image/jpeg;base64,{base64_file}"  # or data:application/pdf;base64,{base64_file}
#                     }
#                 }
#             ]
#         }
#     ]${i}
# )
# print(response_with_file)
`;break}case o.RESPONSES:{let e=Object.keys(S).length>0,i="";if(e){let e=JSON.stringify({metadata:S},null,2).split("\n").map(e=>" ".repeat(4)+e).join("\n").trim();i=`,
    extra_body=${e}`}let r=C.length>0?C:[{role:"user",content:E}];t=`
import base64

# Helper function to encode images to base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

# Example with text only
response = client.responses.create(
    model="${w}",
    input=${JSON.stringify(r,null,4)}${i}
)

print(response.output_text)

# Example with image or PDF (uncomment and provide file path to use)
# base64_file = encode_image("path/to/your/file.jpg")  # or .pdf
# response_with_file = client.responses.create(
#     model="${w}",
#     input=[
#         {
#             "role": "user",
#             "content": [
#                 {"type": "input_text", "text": "${k}"},
#                 {
#                     "type": "input_image",
#                     "image_url": f"data:image/jpeg;base64,{base64_file}",  # or data:application/pdf;base64,{base64_file}
#                 },
#             ],
#         }
#     ]${i}
# )
# print(response_with_file.output_text)
`;break}case o.IMAGE:t="azure"===b?`
# NOTE: The Azure SDK does not have a direct equivalent to the multi-modal 'responses.create' method shown for OpenAI.
# This snippet uses 'client.images.generate' and will create a new image based on your prompt.
# It does not use the uploaded image, as 'client.images.generate' does not support image inputs in this context.
import os
import requests
import json
import time
from PIL import Image

result = client.images.generate(
	model="${w}",
	prompt="${n}",
	n=1
)

json_response = json.loads(result.model_dump_json())

# Set the directory for the stored image
image_dir = os.path.join(os.curdir, 'images')

# If the directory doesn't exist, create it
if not os.path.isdir(image_dir):
	os.mkdir(image_dir)

# Initialize the image path
image_filename = f"generated_image_{int(time.time())}.png"
image_path = os.path.join(image_dir, image_filename)

try:
	# Retrieve the generated image
	if json_response.get("data") && len(json_response["data"]) > 0 && json_response["data"][0].get("url"):
			image_url = json_response["data"][0]["url"]
			generated_image = requests.get(image_url).content
			with open(image_path, "wb") as image_file:
					image_file.write(generated_image)

			print(f"Image saved to {image_path}")
			# Display the image
			image = Image.open(image_path)
			image.show()
	else:
			print("Could not find image URL in response.")
			print("Full response:", json_response)
except Exception as e:
	print(f"An error occurred: {e}")
	print("Full response:", json_response)
`:`
import base64
import os
import time
import json
from PIL import Image
import requests

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# Helper function to create a file (simplified for this example)
def create_file(image_path):
	# In a real implementation, this would upload the file to OpenAI
	# For this example, we'll just return a placeholder ID
	return f"file_{os.path.basename(image_path).replace('.', '_')}"

# The prompt entered by the user
prompt = "${k}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${w}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
							},
							{
									"type": "input_image",
									"file_id": file_id2,
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`;break;case o.IMAGE_EDITS:t="azure"===b?`
import base64
import os
import time
import json
from PIL import Image
import requests

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# The prompt entered by the user
prompt = "${k}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${w}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
							},
							{
									"type": "input_image",
									"file_id": file_id2,
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`:`
import base64
import os
import time

# Helper function to encode images to base64
def encode_image(image_path):
	with open(image_path, "rb") as image_file:
			return base64.b64encode(image_file.read()).decode('utf-8')

# Helper function to create a file (simplified for this example)
def create_file(image_path):
	# In a real implementation, this would upload the file to OpenAI
	# For this example, we'll just return a placeholder ID
	return f"file_{os.path.basename(image_path).replace('.', '_')}"

# The prompt entered by the user
prompt = "${k}"

# Encode images to base64
base64_image1 = encode_image("body-lotion.png")
base64_image2 = encode_image("soap.png")

# Create file IDs
file_id1 = create_file("body-lotion.png")
file_id2 = create_file("incense-kit.png")

response = client.responses.create(
	model="${w}",
	input=[
			{
					"role": "user",
					"content": [
							{"type": "input_text", "text": prompt},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image1}",
							},
							{
									"type": "input_image",
									"image_url": f"data:image/jpeg;base64,{base64_image2}",
							},
							{
									"type": "input_image",
									"file_id": file_id1,
							},
							{
									"type": "input_image",
									"file_id": file_id2,
							}
					],
			}
	],
	tools=[{"type": "image_generation"}],
)

# Process the response
image_generation_calls = [
	output
	for output in response.output
	if output.type == "image_generation_call"
]

image_data = [output.result for output in image_generation_calls]

if image_data:
	image_base64 = image_data[0]
	image_filename = f"edited_image_{int(time.time())}.png"
	with open(image_filename, "wb") as f:
			f.write(base64.b64decode(image_base64))
	print(f"Image saved to {image_filename}")
else:
	# If no image is generated, there might be a text response with an explanation
	text_response = [output.text for output in response.output if hasattr(output, 'text')]
	if text_response:
			print("No image generated. Model response:")
			print("\\n".join(text_response))
	else:
			print("No image data found in response.")
	print("Full response for debugging:")
	print(response)
`;break;case o.EMBEDDINGS:t=`
response = client.embeddings.create(
	input="${n||"Your string here"}",
	model="${w}",
	encoding_format="base64" # or "float"
)

print(response.data[0].embedding)
`;break;case o.TRANSCRIPTION:t=`
# Open the audio file
audio_file = open("path/to/your/audio/file.mp3", "rb")

# Make the transcription request
response = client.audio.transcriptions.create(
	model="${w}",
	file=audio_file${n?`,
	prompt="${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`:""}
)

print(response.text)
`;break;case o.SPEECH:t=`
# Make the text-to-speech request
response = client.audio.speech.create(
	model="${w}",
	input="${n||"Your text to convert to speech here"}",
	voice="${f}"  # Options: alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer
)

# Save the audio to a file
output_filename = "output_speech.mp3"
response.stream_to_file(output_filename)
print(f"Audio saved to {output_filename}")

# Optional: Customize response format and speed
# response = client.audio.speech.create(
#     model="${w}",
#     input="${n||"Your text to convert to speech here"}",
#     voice="alloy",
#     response_format="mp3",  # Options: mp3, opus, aac, flac, wav, pcm
#     speed=1.0  # Range: 0.25 to 4.0
# )
# response.stream_to_file("output_speech.mp3")
`;break;default:t="\n# Code generation for this endpoint is not implemented yet."}return`${I}
${t}`}],339019)},309821,e=>{"use strict";e.i(247167);var t=e.i(271645),i=e.i(135551),r=e.i(201072),o=e.i(121229),a=e.i(726289),n=e.i(864517),s=e.i(343794),l=e.i(529681),c=e.i(242064),p=e.i(931067),u=e.i(209428),m=e.i(703923),d={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},g=function(){var e=(0,t.useRef)([]),i=(0,t.useRef)(null);return(0,t.useEffect)(function(){var t=Date.now(),r=!1;e.current.forEach(function(e){if(e){r=!0;var o=e.style;o.transitionDuration=".3s, .3s, .3s, .06s",i.current&&t-i.current<100&&(o.transitionDuration="0s, 0s")}}),r&&(i.current=Date.now())}),e.current},f=e.i(410160),_=e.i(392221),h=e.i(654310),b=0,y=(0,h.default)();let $=function(e){var i=t.useState(),r=(0,_.default)(i,2),o=r[0],a=r[1];return t.useEffect(function(){var e;a("rc_progress_".concat((y?(e=b,b+=1):e="TEST_OR_SSR",e)))},[]),e||o};var v=function(e){var i=e.bg,r=e.children;return t.createElement("div",{style:{width:"100%",height:"100%",background:i}},r)};function x(e,t){return Object.keys(e).map(function(i){var r=parseFloat(i),o="".concat(Math.floor(r*t),"%");return"".concat(e[i]," ").concat(o)})}var E=t.forwardRef(function(e,i){var r=e.prefixCls,o=e.color,a=e.gradientId,n=e.radius,s=e.style,l=e.ptg,c=e.strokeLinecap,p=e.strokeWidth,u=e.size,m=e.gapDegree,d=o&&"object"===(0,f.default)(o),g=u/2,_=t.createElement("circle",{className:"".concat(r,"-circle-path"),r:n,cx:g,cy:g,stroke:d?"#FFF":void 0,strokeLinecap:c,strokeWidth:p,opacity:+(0!==l),style:s,ref:i});if(!d)return _;var h="".concat(a,"-conic"),b=x(o,(360-m)/360),y=x(o,1),$="conic-gradient(from ".concat(m?"".concat(180+m/2,"deg"):"0deg",", ").concat(b.join(", "),")"),E="linear-gradient(to ".concat(m?"bottom":"top",", ").concat(y.join(", "),")");return t.createElement(t.Fragment,null,t.createElement("mask",{id:h},_),t.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(h,")")},t.createElement(v,{bg:E},t.createElement(v,{bg:$}))))}),k=function(e,t,i,r,o,a,n,s,l,c){var p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,u=(100-r)/100*t;return"round"===l&&100!==r&&(u+=c/2)>=t&&(u=t-.01),{stroke:"string"==typeof s?s:void 0,strokeDasharray:"".concat(t,"px ").concat(e),strokeDashoffset:u+p,transform:"rotate(".concat(o+i/100*360*((360-a)/360)+(0===a?0:({bottom:0,top:180,left:90,right:-90})[n]),"deg)"),transformOrigin:"".concat(50,"px ").concat(50,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},C=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function S(e){var t=null!=e?e:[];return Array.isArray(t)?t:[t]}let w=function(e){var i,r,o,a,n=(0,u.default)((0,u.default)({},d),e),l=n.id,c=n.prefixCls,_=n.steps,h=n.strokeWidth,b=n.trailWidth,y=n.gapDegree,v=void 0===y?0:y,x=n.gapPosition,w=n.trailColor,I=n.strokeLinecap,O=n.style,j=n.className,A=n.strokeColor,N=n.percent,T=(0,m.default)(n,C),P=$(l),D="".concat(P,"-gradient"),R=50-h/2,M=2*Math.PI*R,L=v>0?90+v/2:-90,z=(360-v)/360*M,F="object"===(0,f.default)(_)?_:{count:_,gap:2},H=F.count,W=F.gap,B=S(N),X=S(A),G=X.find(function(e){return e&&"object"===(0,f.default)(e)}),U=G&&"object"===(0,f.default)(G)?"butt":I,Y=k(M,z,0,100,L,v,x,w,U,h),q=g();return t.createElement("svg",(0,p.default)({className:(0,s.default)("".concat(c,"-circle"),j),viewBox:"0 0 ".concat(100," ").concat(100),style:O,id:l,role:"presentation"},T),!H&&t.createElement("circle",{className:"".concat(c,"-circle-trail"),r:R,cx:50,cy:50,stroke:w,strokeLinecap:U,strokeWidth:b||h,style:Y}),H?(i=Math.round(H*(B[0]/100)),r=100/H,o=0,Array(H).fill(null).map(function(e,a){var n=a<=i-1?X[0]:w,s=n&&"object"===(0,f.default)(n)?"url(#".concat(D,")"):void 0,l=k(M,z,o,r,L,v,x,n,"butt",h,W);return o+=(z-l.strokeDashoffset+W)*100/z,t.createElement("circle",{key:a,className:"".concat(c,"-circle-path"),r:R,cx:50,cy:50,stroke:s,strokeWidth:h,opacity:1,style:l,ref:function(e){q[a]=e}})})):(a=0,B.map(function(e,i){var r=X[i]||X[X.length-1],o=k(M,z,a,e,L,v,x,r,U,h);return a+=e,t.createElement(E,{key:i,color:r,ptg:e,radius:R,prefixCls:c,gradientId:D,style:o,strokeLinecap:U,strokeWidth:h,gapDegree:v,ref:function(e){q[i]=e},size:100})}).reverse()))};var I=e.i(491816);e.i(765846);var O=e.i(896091);function j(e){return!e||e<0?0:e>100?100:e}function A({success:e,successPercent:t}){let i=t;return e&&"progress"in e&&(i=e.progress),e&&"percent"in e&&(i=e.percent),i}let N=(e,t,i)=>{var r,o,a,n;let s=-1,l=-1;if("step"===t){let t=i.steps,r=i.strokeWidth;"string"==typeof e||void 0===e?(s="small"===e?2:14,l=null!=r?r:8):"number"==typeof e?[s,l]=[e,e]:[s=14,l=8]=Array.isArray(e)?e:[e.width,e.height],s*=t}else if("line"===t){let t=null==i?void 0:i.strokeWidth;"string"==typeof e||void 0===e?l=t||("small"===e?6:8):"number"==typeof e?[s,l]=[e,e]:[s=-1,l=8]=Array.isArray(e)?e:[e.width,e.height]}else("circle"===t||"dashboard"===t)&&("string"==typeof e||void 0===e?[s,l]="small"===e?[60,60]:[120,120]:"number"==typeof e?[s,l]=[e,e]:Array.isArray(e)&&(s=null!=(o=null!=(r=e[0])?r:e[1])?o:120,l=null!=(n=null!=(a=e[0])?a:e[1])?n:120));return[s,l]},T=e=>{let{prefixCls:i,trailColor:r=null,strokeLinecap:o="round",gapPosition:a,gapDegree:n,width:l=120,type:c,children:p,success:u,size:m=l,steps:d}=e,[g,f]=N(m,"circle"),{strokeWidth:_}=e;void 0===_&&(_=Math.max(3/g*100,6));let h=t.useMemo(()=>n||0===n?n:"dashboard"===c?75:void 0,[n,c]),b=(({percent:e,success:t,successPercent:i})=>{let r=j(A({success:t,successPercent:i}));return[r,j(j(e)-r)]})(e),y="[object Object]"===Object.prototype.toString.call(e.strokeColor),$=(({success:e={},strokeColor:t})=>{let{strokeColor:i}=e;return[i||O.presetPrimaryColors.green,t||null]})({success:u,strokeColor:e.strokeColor}),v=(0,s.default)(`${i}-inner`,{[`${i}-circle-gradient`]:y}),x=t.createElement(w,{steps:d,percent:d?b[1]:b,strokeWidth:_,trailWidth:_,strokeColor:d?$[1]:$,strokeLinecap:o,trailColor:r,prefixCls:i,gapDegree:h,gapPosition:a||"dashboard"===c&&"bottom"||void 0}),E=g<=20,k=t.createElement("div",{className:v,style:{width:g,height:f,fontSize:.15*g+6}},x,!E&&p);return E?t.createElement(I.default,{title:p},k):k};e.i(296059);var P=e.i(694758),D=e.i(915654),R=e.i(183293),M=e.i(246422),L=e.i(838378);let z="--progress-line-stroke-color",F="--progress-percent",H=e=>{let t=e?"100%":"-100%";return new P.Keyframes(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},W=(0,M.genStyleHooks)("Progress",e=>{let t=e.calc(e.marginXXS).div(2).equal(),i=(0,L.mergeToken)(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[(e=>{let{componentCls:t,iconCls:i}=e;return{[t]:Object.assign(Object.assign({},(0,R.resetComponent)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${z})`]},height:"100%",width:`calc(1 / var(${F}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[i]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${(0,D.unit)(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:H(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:H(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}})(i),(e=>{let{componentCls:t,iconCls:i}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[i]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}})(i),(e=>{let{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}})(i),(e=>{let{componentCls:t,iconCls:i}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${i}`]:{fontSize:e.fontSizeSM}}}})(i)]},e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}));var B=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(i[r[o]]=e[r[o]]);return i};let X=e=>{let{prefixCls:i,direction:r,percent:o,size:a,strokeWidth:n,strokeColor:l,strokeLinecap:c="round",children:p,trailColor:u=null,percentPosition:m,success:d}=e,{align:g,type:f}=m,_=l&&"string"!=typeof l?((e,t)=>{let{from:i=O.presetPrimaryColors.blue,to:r=O.presetPrimaryColors.blue,direction:o="rtl"===t?"to left":"to right"}=e,a=B(e,["from","to","direction"]);if(0!==Object.keys(a).length){let e,t=(e=[],Object.keys(a).forEach(t=>{let i=Number.parseFloat(t.replace(/%/g,""));Number.isNaN(i)||e.push({key:i,value:a[t]})}),(e=e.sort((e,t)=>e.key-t.key)).map(({key:e,value:t})=>`${t} ${e}%`).join(", ")),i=`linear-gradient(${o}, ${t})`;return{background:i,[z]:i}}let n=`linear-gradient(${o}, ${i}, ${r})`;return{background:n,[z]:n}})(l,r):{[z]:l,background:l},h="square"===c||"butt"===c?0:void 0,[b,y]=N(null!=a?a:[-1,n||("small"===a?6:8)],"line",{strokeWidth:n}),$=Object.assign(Object.assign({width:`${j(o)}%`,height:y,borderRadius:h},_),{[F]:j(o)/100}),v=A(e),x={width:`${j(v)}%`,height:y,borderRadius:h,backgroundColor:null==d?void 0:d.strokeColor},E=t.createElement("div",{className:`${i}-inner`,style:{backgroundColor:u||void 0,borderRadius:h}},t.createElement("div",{className:(0,s.default)(`${i}-bg`,`${i}-bg-${f}`),style:$},"inner"===f&&p),void 0!==v&&t.createElement("div",{className:`${i}-success-bg`,style:x})),k="outer"===f&&"start"===g,C="outer"===f&&"end"===g;return"outer"===f&&"center"===g?t.createElement("div",{className:`${i}-layout-bottom`},E,p):t.createElement("div",{className:`${i}-outer`,style:{width:b<0?"100%":b}},k&&p,E,C&&p)},G=e=>{let{size:i,steps:r,rounding:o=Math.round,percent:a=0,strokeWidth:n=8,strokeColor:l,trailColor:c=null,prefixCls:p,children:u}=e,m=o(a/100*r),[d,g]=N(null!=i?i:["small"===i?2:14,n],"step",{steps:r,strokeWidth:n}),f=d/r,_=Array.from({length:r});for(let e=0;e<r;e++){let i=Array.isArray(l)?l[e]:l;_[e]=t.createElement("div",{key:e,className:(0,s.default)(`${p}-steps-item`,{[`${p}-steps-item-active`]:e<=m-1}),style:{backgroundColor:e<=m-1?i:c,width:f,height:g}})}return t.createElement("div",{className:`${p}-steps-outer`},_,u)};var U=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(i[r[o]]=e[r[o]]);return i};let Y=["normal","exception","active","success"],q=t.forwardRef((e,p)=>{let u,{prefixCls:m,className:d,rootClassName:g,steps:f,strokeColor:_,percent:h=0,size:b="default",showInfo:y=!0,type:$="line",status:v,format:x,style:E,percentPosition:k={}}=e,C=U(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:S="end",type:w="outer"}=k,I=Array.isArray(_)?_[0]:_,O="string"==typeof _||Array.isArray(_)?_:void 0,P=t.useMemo(()=>{if(I){let e="string"==typeof I?I:Object.values(I)[0];return new i.FastColor(e).isLight()}return!1},[_]),D=t.useMemo(()=>{var t,i;let r=A(e);return Number.parseInt(void 0!==r?null==(t=null!=r?r:0)?void 0:t.toString():null==(i=null!=h?h:0)?void 0:i.toString(),10)},[h,e.success,e.successPercent]),R=t.useMemo(()=>!Y.includes(v)&&D>=100?"success":v||"normal",[v,D]),{getPrefixCls:M,direction:L,progress:z}=t.useContext(c.ConfigContext),F=M("progress",m),[H,B,q]=W(F),K="line"===$,J=K&&!f,V=t.useMemo(()=>{let i;if(!y)return null;let l=A(e),c=x||(e=>`${e}%`),p=K&&P&&"inner"===w;return"inner"===w||x||"exception"!==R&&"success"!==R?i=c(j(h),j(l)):"exception"===R?i=K?t.createElement(a.default,null):t.createElement(n.default,null):"success"===R&&(i=K?t.createElement(r.default,null):t.createElement(o.default,null)),t.createElement("span",{className:(0,s.default)(`${F}-text`,{[`${F}-text-bright`]:p,[`${F}-text-${S}`]:J,[`${F}-text-${w}`]:J}),title:"string"==typeof i?i:void 0},i)},[y,h,D,R,$,F,x]);"line"===$?u=f?t.createElement(G,Object.assign({},e,{strokeColor:O,prefixCls:F,steps:"object"==typeof f?f.count:f}),V):t.createElement(X,Object.assign({},e,{strokeColor:I,prefixCls:F,direction:L,percentPosition:{align:S,type:w}}),V):("circle"===$||"dashboard"===$)&&(u=t.createElement(T,Object.assign({},e,{strokeColor:I,prefixCls:F,progressStatus:R}),V));let Q=(0,s.default)(F,`${F}-status-${R}`,{[`${F}-${"dashboard"===$&&"circle"||$}`]:"line"!==$,[`${F}-inline-circle`]:"circle"===$&&N(b,"circle")[0]<=20,[`${F}-line`]:J,[`${F}-line-align-${S}`]:J,[`${F}-line-position-${w}`]:J,[`${F}-steps`]:f,[`${F}-show-info`]:y,[`${F}-${b}`]:"string"==typeof b,[`${F}-rtl`]:"rtl"===L},null==z?void 0:z.className,d,g,B,q);return H(t.createElement("div",Object.assign({ref:p,style:Object.assign(Object.assign({},null==z?void 0:z.style),E),className:Q,role:"progressbar","aria-valuenow":D,"aria-valuemin":0,"aria-valuemax":100},(0,l.default)(C,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),u))});e.s(["default",0,q],309821)},536916,e=>{"use strict";var t=e.i(374276);e.s(["Checkbox",()=>t.default])}]);