---
title: Wiki
---

df
<nav class="collapse bd-links" id="courses-nav" aria-label="Making Wiki Navigation">
<ul class="list-unstyled mb-0 py-3 pt-md-1">

                {{ $sectionPages := where .Site.Pages "Section" .Section }}
                {{ range $sectionPages }}

                {{ if .IsNode }}
                <li class="mb-1">
                    <button class="btn d-inline-flex align-items-center rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#{{ .Title | urlize  }}" aria-expanded="false" aria-controls="{{ .Title | urlize  }}">
                        {{ .Title }}
                    </button>

                    <div class="collapse" id="{{ .Title | urlize  }}">
                        {{ partial "walk.html" . }}
                    </div>
                </li>
                {{end }}

                {{ if .IsPage }}
                <li class="fw-normal">
                    <a class="d-inline-flex align-items-center rounded" href="{{ .RelPermalink }}">{{ .Title }}</a>
                </li>
                {{end }}

                {{ end }}

            </ul>
