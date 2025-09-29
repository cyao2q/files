// ==UserScript==
// @name         123云盘解锁
// @author       QingJ
// @namespace    https://github.com/QingJ01/123pan_unlock
// @version      1.1.3
// @description  专业的123云盘增强脚本 - 完美解锁会员功能、突破下载限制、去广告、支持自定义用户信息。支持个人网盘与分享页面，可在线配置，界面精美，功能强大，让你的123云盘体验更美好！
// @license      Apache Licence 2.
// @icon         data:image/x-icon;base64,AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAMMOAADDDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgC+3xYB/t8WBf7fFhQ+3xYkPt8WMD7fFji+3xY9Px9Wfr8fVn7+3xY+/x9Wfv7fFj7/H1Z+/t8WPv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv7fVn7+31Z+/t9Wfv7fVn7/H1Z+/x9Wfv8fVn7+3xY+/x9Wfv7fFj7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfr7fFj1+3xY5Pt8WMP7fFiU+3xYVPt8WBn7fFgI+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAD7fFgF+3xYJft8WIL7fFjV/H1Z8ft9Wff8fVn6+31Z/ft9Wf78fVn//H1Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//x9WP/8fVn/+31Z//x9Wf/7fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z/vt9Wf38fVn7/H1Z9/x9WfL7fFjZ+3xYift8WCr7fFgG+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgQ+3xYc/t8WNn8fVn1/H1Z/fx9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z/fx9Wfb7fFjd+3xYfPt8WBP7fFgC+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgm+3xYrvt9We/7fVn9+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fVj/+3xY//t8WP/7fFj/+31Y//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z/vt9WfD7fFi2+3xYLft8WAP7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgx+3xYxvt9Wff7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t9Wf/7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z+ft8WMz7fFg5+3xYA/t8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgp+3xYxvx9WPn8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn7+3xYzft8WDH7fFgC+3xYAAAAAAAAAAAAAAAAAPt8WAH7fFgT+3xYtfx9Wfj7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wf/7fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn/+31Z//x9Wf/7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wfn7fFi++3xYGft8WAEAAAAAAAAAAPt8WAD7fFgG+3xYgfx9WfD8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8/t8WI/7fFgG+3xYAAAAAAD7fFgC+3xYMft8WOD8fFn+/HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf77fFjk+3xYPPt8WAMAAAAA+3xYB/t8WJb7fFj3+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY+Pt8WKT7fFgI+3xYAft8WCL7fFjg/HxY/vx8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP77fFnm+3xYLft8WAX7fFhj/HxY8/x8Wf/7fFj/+3xY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj//HxY//t8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/7fFj//HxY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj/+3xY//t8WP/8fFn//HxY9Pt8WHL7fFgJ+3xYovt8Wfn8fFn//HxZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Y//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn/+3xZ//x8Wf/8fFn/+3xZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Z//x8Wf/8fFn//HxZ//x9Wfr7fFix+3xYDPt8WND7fVj9+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn++3xY3Pt8WBn7fFjo/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WO37fFgm+3xY7/t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjw+3xYLPx8WPD8fVn//H1Z//x9Wf/8fVj++3xZw/t8WK77fFit+3xYrft8WK37fFis/HxY2Px8WPr8fFj/+3xY3/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WKv7fFjC/HxY7/x9WP/8fFj//HxY5/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYr/t8WLP7fFi8+3xYzPt8WOf7fFj//HxY//x8WP/8fVj//H1Y//x8WP/8fVj//H1Z//x9Wf/8fVn//HxY8ft8WCz7fVjw/H1Y//t9WP/7fVj//H1Y/Pt8WV77fFgn+3xYI/t8WCP7fFgj+3xYIvx9WZb8fVjx+31Y//t8WKn7fFg7+3xYIft8WCP7fFgj+3xYI/t8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Wf/7fVn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t9Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFnk+3xYXvt8WAAAAAAAAAAAAPt8WAD7fFgD+3xYOft8Wfv7fFn/+3xZ//t8Wf/7fFnx+3xYLPx8WfD8fFn//HxZ//x8Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD8fFkA/HxZhfx9We/8fFn/+3xYoft8WB77fFgAAAAAAAAAAAD7fFgA+3xYSft8WdP8fFn//HxZ//x9Wf/8fVn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//H1Z6vt8WHX7fFgAAAAAAAAAAAD7fFgA+3xYBft8WEL8fVn7/HxZ//x8Wf/8fFn//HxZ8ft8WCz7fFjw+3xY//t8WP/7fFj/+3xY+/t8WUT7fFkF+3xZAAAAAAAAAAAA/H1YAPx9WIX8fFjv+3xY//t8WLD7fFgj+3xYAAAAAAAAAAAA+3xYAPt8WCf7fFjB+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WOD7fFhL+3xYAAAAAAAAAAAA+3xYAPt8WAn7fFhi+3xY/Pt8WP/7fFj/+3xY//t8WPH7fFgs+3xY8Pt8Wf/7fFn/+3xY//t8WPv7fFlE+3xZBft8WQAAAAAAAAAAAPx9WQD8fVmF+3xZ7/t8Wf/7fFjM+3xYLPt8WAAAAAAAAAAAAPt8WAD7fFgF+3xYd/t8WOf7fFj/+3xZ//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WOn7fFiG+3xYEft8WAAAAAAAAAAAAPt8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WO/7fFj/+3xY//t8WP/7fFj/+3xY8ft8WCz8fVjw/H1Y//x9WP/8fVj//H1Y+/t8WET7fFkF+3xZAAAAAAAAAAAA/H1ZAPx9WYX8fVnv/H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/7fVj2+3xYkft8WB37fFgAAAAAAAAAAAD7fFgA+ntXAvt8WHn7fFj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//t9WP/7fFj6+3xY0/t8WHT7fFgM+3xYAAAAAAAAAAAA+3xYAPt8WBb7fFi1/HxY/fx9WP/8fVj//H1Y//x9WPH7fFgs+31Z8Pt9Wf/7fVn/+31Z//t9Wfv7fFlE+3xYBft8WAAAAAAAAAAAAPx9WQD8fVmF+31Z7/t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wdn7fFhO+3xYAAAAAAAAAAAA+XpWAPt8WAD7fFhp+3xY//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fFjd+3xYQPt8WAAAAAAAAAAAAPt8WAD7fFgL+3xYcPt9Wfz7fVn/+31Z//t9Wf/7fVnx+3xYLPx9WfD8fVj//H1Z//x9Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD7fFgA+3xYhfx9WO/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WP/8fVj//H1Z//x9Wf/8fVn//H1Y//x9Wf/8fVn//H1Z//x9Wf/8fVno+3xYXPt8WAAAAAAAAAAAAAAAAAD7fFgA+3xYZPt8WPr8fVn//H1Z//x9WP/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Y6Pt8WGz7fFgAAAAAAAAAAAD7fFgA+3xYBvt8WEv8fVn7/H1Z//x9Wf/8fVj//H1Z8ft8WCz8fVnw/H1Z//x9Wf/8fVn//H1Z+/t8WET7fFgF+3xYAAAAAAAAAAAA/HxZAPx8WYX8fVnv/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9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WDP7fFg/+3xYY/t8WK77fFjv+3xY//t8WP/7fFj/+3xY//t8WP/7fFjA+3xYQfx9WSf8fVkp/H1ZKfx9WSn8fVkp/H1ZKfx9WSn8fVkp/H1YKft8WCv7fFgv+3xYN/t8WFL7fFiV+3xY6vt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjx+3xYK/x8WPD8fFj//HxY//x8WP/8fFj++3xZy/x9Wbn8fVm4/H1ZuPx9Wbj8fVm4/H1Z3fx8WPr8fFj//HxY+/x8WMj8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVi4+3xYuft8WMD7fFjS+3xY7fx8WP78fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY6vx8WMD8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1YuPx9WLn7fFi++3xYx/t8WNz7fFj7/HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY8ft8WCX8fFnu/HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//t8WP/8fFn//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WfD7fFgX+3xY5ft9WP77fVj/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVj/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Y//t9Wf/7fVj/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVjr+3xYDPt8WM38fVn8/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn9+3xY2vt8WAn7fFie+3xY+Pt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY+vt8WK37fFgF+3xYXvt9WPL7fVj/+3xY//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fFj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fFj/+31Y//t9WPT7fFhs+3xYAft8WB77fFjd/H1Y/vx9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP77fFjj+3xYKQAAAAD7fFgH+3xYkPt9Wfb7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn4+3xYnvt8WAcAAAAA+3xYAvt8WCv7fFjc+31Z/ft9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn++3xY4vt8WDb7fFgCAAAAAPt8WAD7fFgF+3xYefx9We78fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8ft8WIb7fFgG+3xYAAAAAAAAAAAA+3xYAPt8WBD7fFiu+31Z9vt9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t8Wf/7fVn/+3xZ//t8Wf/7fVn/+31Z//t9Wf/7fFn/+3xZ//t9Wf/7fFn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z+Pt8WLf7fFgV+3xYAQAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYI/t8WMD8fFj4/HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY+vt8WMj7fFgr+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgr+3xYvvx8WPX8fFn+/HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY9/t8WMT7fFgx+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYAvt8WCD7fFil+3xZ6/t8Wf37fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn9+3xZ7ft8WK77fFgm+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYC/t8WGf7fFjT+31Y8/t9WPz7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fFj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP37fFj0+3xY1vt8WHD7fFgO+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+nxYAPp8WAD7fFgE+3xYHft8WHb7fFjM/H1Z7fx9WfX8fVn5/H1Z/Px9Wf38fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/fx9Wfz8fVn5/H1Z9vx9We77fFjR+3xYfPt8WCH7fFgF+3xYAPt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgF+3xYD/t8WED7fFh7+3xYqPt8WMf7fFjZ/H1Z3/x9WeD8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/t8WNv7fFjK+3xYrPt8WH77fFhF+3xYEvt8WAb7fFgB+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ntXAPp7VwD7fFgD+3xYB/t8WAr7fFgM+3xYDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ37fFgN+3xYDPt8WAr7fFgH+3xYBPt8WAH7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAH/8AAAAAAAAH/gAAAAAAAAP8AAAAAAAAAfgAAAAAAAAA8AAAAAAAAABwAAAAAAAAAGAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB//+B/+AAA8H//4H/+AADwf//gf/8AAPB4AAAAH4AA8HgAAAAPgADweAAAAAeAAPB4AAAAB4AA8HgAAAAHgADweAAAAAeAAPB4AAAAB4AA8HwAAAAPAADwPgAAAD4AAPA//wAf/AAA8B//gB/8AADwB//AH/wAAPAAB+AAPgAA8AAD4AAPAADwAAHgAAeAAPAAAfAAB4AA8AAB8AAHgADwAAHwAAeAAPAAAeAAB4AA8AAD4AAPgADwAA/gAB8AAPB//8B//wAA8H//gH/+AADwf/4Af/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAMAAAAAAAAABwAAAAAAAAAHgAAAAAAAAA/AAAAAAAAAH+AAAAAAAAA/8AAAAAAAAH/8AAAAAAAB//+AAAAAAA/8=
// @match        *://*.123pan.com/*
// @match        *://*.123pan.cn/*
// @match        *://*.123684.com/*
// @match        *://*.123865.com/*
// @match        *://*.123952.com/*
// @match        *://*.123912.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @downloadURL https://cyao2q.github.io/files/script/123pan.crack.js
// ==/UserScript==

(function () {
    'use strict';

    // 检测unsafeWindow
    if (typeof (unsafeWindow) === 'undefined') window.unsafeWindow = window;

    // 从存储中读取配置
    var user = {
        vip: GM_getValue('vip', 1),
        svip: GM_getValue('svip', 1),
        pvip: GM_getValue('pvip', 0),
        ad: GM_getValue('ad', 1),
        name: GM_getValue('name', "QingJ"),
        photo: GM_getValue('photo', "http://q.qlogo.cn/headimg_dl?dst_uin=2903609300&spec=640&img_type=jpg"),
        mail: GM_getValue('mail', ""),
        phone: GM_getValue('phone', ""),
        id: GM_getValue('id', ""),
        level: GM_getValue('level', 128),
        endtime: GM_getValue('endtime', 253402185600),
        debug: GM_getValue('debug', 0),
    }

    // 保存原始方法
    const originalXHR = unsafeWindow.XMLHttpRequest;
    const originalFetch = unsafeWindow.fetch;
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

    // 创建唯一标识符
    const requestURLSymbol = Symbol('requestURL');
    const modifiedHeadersSymbol = Symbol('modifiedHeaders');

    // 规则配置
    const rules = [
        {
            // 用户信息
            runat: "end",
            match: (url) => url.pathname.includes('api/user/info'),
            condition: () => user.vip === 1,
            action: (res) => {
                if (!res.data) return res;

                res.data.Vip = true;
                res.data.VipLevel = user.pvip ? 3 : (user.svip ? 2 : 1);

                if (user.ad === 1) res.data.IsShowAdvertisement = false;

                // 确保UserVipDetail存在
                if (!res.data.UserVipDetail) {
                    res.data.UserVipDetail = {};
                }
                res.data.UserVipDetail.VipCode = res.data.VipLevel;

                if (user.pvip === 1) {
                    // 长期会员
                    res.data.VipExpire = "永久有效";
                    res.data.UserVipDetail.UserPermanentVIPDetailInfos = [{
                        VipDesc: "长期VIP会员",
                        TimeDesc: " 永久有效",
                        IsUse: true
                    }];
                    res.data.UserVipDetailInfos = [];
                } else if (user.svip === 1) {
                    // 超级会员
                    let time = new Date(user.endtime * 1000);
                    res.data.VipExpire = time.toLocaleString();
                    res.data.UserVipDetailInfos = [{
                        VipDesc: "SVIP 会员",
                        TimeDesc: time.toLocaleDateString() + " 到期",
                        IsUse: time >= new Date()
                    }];
                } else {
                    // 普通会员
                    let time = new Date(user.endtime * 1000);
                    res.data.VipExpire = time.toLocaleString();
                    res.data.UserVipDetailInfos = [{
                        VipDesc: "VIP 会员",
                        TimeDesc: time.toLocaleDateString() + " 到期",
                        IsUse: time >= new Date()
                    }];
                }

                if (user.name) res.data.Nickname = user.name;
                if (user.photo) res.data.HeadImage = user.photo;
                if (user.mail) res.data.Mail = user.mail;
                if (user.phone) res.data.Passport = Number(user.phone);
                if (user.id) res.data.UID = Number(user.id);
                if (user.level) res.data.GrowSpaceAddCount = Number(user.level);

                return res;
            }
        },
        {
            // 用户报告信息
            runat: "end",
            match: (url) => url.pathname.includes('user/report/info'),
            condition: () => user.vip === 1,
            action: (res) => {
                if (res && res.data) {
                    res.data.vipType = user.pvip ? 3 : (user.svip ? 2 : 1);
                    res.data.vipSub = user.pvip ? 3 : (user.svip ? 2 : 1);
                    res.data.developSub = user.pvip ? 3 : (user.svip ? 2 : 1);
                }
                return res;
            }
        },
        {
            // 下载请求头处理
            runat: "header",
            match: (url) => [
                'file/download_info',
                'file/batch_download_info',
                'share/download/info',
                'file/batch_download_share_info'
            ].some(path => url.pathname.includes(path)),
            condition: () => true,
            action: (headers) => {
                headers.platform = 'android';
                return headers;
            }
        },
        {
            // 下载信息处理
            runat: "end",
            match: (url) => [
                'file/download_info',
                'file/batch_download_info',
                'share/download/info',
                'file/batch_download_share_info'
            ].some(path => url.pathname.includes(path)),
            condition: () => true,
            action: (res, url) => {
                // 处理下载限制错误
                if (res?.code === 5113 || res?.code === 5114 || res?.message?.includes("下载流量已超出")) {
                    if (url.pathname.includes("batch_download")) {
                        return {
                            code: 400,
                            message: "【123云盘解锁】请勿多选文件！已为您拦截支付下载窗口",
                            data: null
                        };
                    } else {
                        return {
                            code: 400,
                            message: "【123云盘解锁】您今日下载流量已超出限制，已为您拦截支付窗口",
                            data: null
                        };
                    }
                }

                if (res.data && (res.data.DownloadUrl || res.data.DownloadURL)) {
                    // 统一处理下载链接
                    let origKey = res.data.DownloadUrl ? 'DownloadUrl' : 'DownloadURL';
                    let origURL = new URL(res.data[origKey]);
                    let finalURL;

                    if (origURL.origin.includes("web-pro")) {
                        let params = (() => {
                            try {
                                return decodeURIComponent(atob(origURL.searchParams.get('params')));
                            } catch {
                                return atob(origURL.searchParams.get('params'));
                            }
                        })();
                        let directURL = new URL(params, origURL.origin);
                        directURL.searchParams.set('auto_redirect', 0);
                        origURL.searchParams.set('params', btoa(encodeURI(directURL.href)));
                        finalURL = decodeURIComponent(origURL.href);
                    } else {
                        origURL.searchParams.set('auto_redirect', 0);
                        let newURL = new URL('https://web-pro2.123952.com/download-v2/', origURL.origin);
                        newURL.searchParams.set('params', btoa(encodeURI(origURL.href)));
                        newURL.searchParams.set('is_s3', 0);
                        finalURL = decodeURIComponent(newURL.href);
                    }
                    res.data[origKey] = finalURL;
                }

                return res;
            }
        },
        {
            // 屏蔽数据收集请求
            runat: "start",
            match: (url) => url.pathname.includes('web_logs') || url.pathname.includes('metrics'),
            condition: () => true,
            action: () => {
                throw new Error('【123云盘解锁】已屏蔽此数据收集器');
            }
        }
    ];

    // 工具函数
    function findMatchingRule(url, phase) {
        return rules.find(rule =>
            rule.match(url) &&
            rule.condition() &&
            rule.runat === phase
        );
    }

    function processData(data) {
        if (typeof data === 'string') {
            try {
                return JSON.parse(data);
            } catch {
                return data;
            }
        }
        return data;
    }

    function debugLog(method, phase, url, original, modified) {
        if (user.debug) {
            console.log(`[123云盘解锁] ${method} ${phase}`, {
                url: url.href,
                original: original,
                modified: modified
            });
        }
    }

    function applyRule(rule, data, url, method, phase) {
        const originalData = processData(data);
        let result = rule.action(originalData, url);

        // 处理header格式化
        if (phase === 'header' && result && typeof result === 'object') {
            const headers = {};
            Object.entries(result).forEach(([key, value]) => {
                const formattedKey = key.toLowerCase()
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join('-');
                headers[formattedKey] = value;
            });
            result = headers;
        }

        debugLog(method, phase, url, originalData, result);

        // 非header返回字符串
        if (phase !== 'header' && result && typeof result === 'object') {
            return JSON.stringify(result);
        }

        return result;
    }

    // 修复后的Fetch拦截
    unsafeWindow.fetch = async function (input, init = {}) {
        const url = new URL(typeof input === 'string' ? input : input.url, location.origin);

        // 检查start规则
        const startRule = findMatchingRule(url, 'start');
        if (startRule) {
            try {
                const result = applyRule(startRule, null, url, 'fetch', 'start');
                return new Response(result, {
                    status: 200,
                    statusText: 'OK',
                    headers: { 'Content-Type': 'application/json' }
                });
            } catch (error) {
                console.warn('[123云盘解锁] fetch start错误:', error);
            }
        }

        // 检查header规则
        const headerRule = findMatchingRule(url, 'header');
        if (headerRule) {
            if (!init.headers) init.headers = {};

            let headers = {};
            if (init.headers instanceof Headers) {
                init.headers.forEach((value, key) => headers[key] = value);
            } else {
                headers = { ...init.headers };
            }

            const modifiedHeaders = applyRule(headerRule, headers, url, 'fetch', 'header');
            init.headers = new Headers(modifiedHeaders);
        }

        // 执行原始请求
        const response = await originalFetch.call(this, input, init);

        // 检查end规则
        const endRule = findMatchingRule(url, 'end');
        if (endRule) {
            try {
                const responseText = await response.clone().text();
                const modifiedResponse = applyRule(endRule, responseText, url, 'fetch', 'end');

                return new Response(modifiedResponse, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                });
            } catch (error) {
                console.warn('[123云盘解锁] fetch end错误:', error);
            }
        }

        return response;
    };

    // 修复后的XMLHttpRequest拦截
    XMLHttpRequest.prototype.open = function (method, url, ...args) {
        const fullUrl = new URL(url, location.origin);
        this[requestURLSymbol] = fullUrl;

        // 使用箭头函数保持this上下文
        const handleStateChange = () => {
            if (this.readyState === 4) {
                const endRule = findMatchingRule(fullUrl, 'end');
                if (endRule) {
                    try {
                        const modifiedResponse = applyRule(
                            endRule,
                            this.responseText,
                            fullUrl,
                            'XHR',
                            'end'
                        );

                        Object.defineProperty(this, 'responseText', {
                            value: modifiedResponse,
                            writable: false,
                            configurable: true
                        });

                        Object.defineProperty(this, 'response', {
                            value: modifiedResponse,
                            writable: false,
                            configurable: true
                        });
                    } catch (error) {
                        console.warn('[123云盘解锁] XHR响应错误:', error);
                    }
                }
            }
        };

        this.addEventListener('readystatechange', handleStateChange);
        return originalOpen.call(this, method, url, ...args);
    };

    XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
        const url = this[requestURLSymbol];
        if (!url) return originalSetRequestHeader.call(this, name, value);

        const headerRule = findMatchingRule(url, 'header');
        if (headerRule) {
            if (!this[modifiedHeadersSymbol]) this[modifiedHeadersSymbol] = {};
            this[modifiedHeadersSymbol][name] = value;

            const modifiedHeaders = applyRule(headerRule, this[modifiedHeadersSymbol], url, 'XHR', 'header');
            this[modifiedHeadersSymbol] = modifiedHeaders;
            return;
        }

        return originalSetRequestHeader.call(this, name, value);
    };

    XMLHttpRequest.prototype.send = function (data) {
        const url = this[requestURLSymbol];
        if (!url) return originalSend.call(this, data);

        // 应用修改的headers
        const modifiedHeaders = this[modifiedHeadersSymbol];
        if (modifiedHeaders) {
            Object.entries(modifiedHeaders).forEach(([name, value]) => {
                originalSetRequestHeader.call(this, name, value);
            });
        }

        // 检查start规则
        const startRule = findMatchingRule(url, 'start');
        if (startRule) {
            try {
                const result = applyRule(startRule, null, url, 'XHR', 'start');

                // 设置响应属性
                Object.defineProperty(this, 'readyState', {
                    value: 4,
                    configurable: true
                });
                Object.defineProperty(this, 'status', {
                    value: 200,
                    configurable: true
                });
                Object.defineProperty(this, 'responseText', {
                    value: result,
                    configurable: true
                });
                Object.defineProperty(this, 'response', {
                    value: result,
                    configurable: true
                });

                // 触发事件
                setTimeout(() => {
                    ['readystatechange', 'load', 'loadend'].forEach(eventType => {
                        try {
                            this.dispatchEvent(new Event(eventType));
                            const handler = this[`on${eventType}`];
                            if (typeof handler === 'function') handler.call(this);
                        } catch (error) {
                            console.warn(`[123云盘解锁] 事件错误 ${eventType}:`, error);
                        }
                    });
                }, 0);

                return;
            } catch (error) {
                console.warn('[123云盘解锁] XHR start错误:', error);
            }
        }

        return originalSend.call(this, data);
    };

    // 格式化设置项
    const formatSetting = (key, value, comment) => {
        const item = document.createElement('div');
        item.className = 'setting-item';

        const content = document.createElement('div');
        content.className = 'setting-content';

        const keyElement = document.createElement('div');
        keyElement.className = 'setting-key';
        keyElement.textContent = key;
        content.appendChild(keyElement);

        // 判断设置类型 - 修复等级1被误判为开关的问题
        const switchKeys = ['VIP状态', 'SVIP显示', '长期会员显示', '广告控制', '调试模式'];
        const isSwitch = switchKeys.includes(key) && typeof value === 'number' && (value === 0 || value === 1);
        const isEditable = ['用户名', '头像', '等级', '过期时间'].includes(key);

        if (isSwitch) {
            // 创建开关按钮
            const switchContainer = document.createElement('label');
            switchContainer.className = 'switch';

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = value === 1;

            const slider = document.createElement('span');
            slider.className = 'slider round';

            switchContainer.appendChild(input);
            switchContainer.appendChild(slider);

            // 添加点击事件
            input.addEventListener('change', () => {
                let newValue = input.checked ? 1 : 0;
                // 更新用户配置
                switch (key) {
                    case 'VIP状态':
                        user.vip = newValue;
                        GM_setValue('vip', newValue);
                        break;
                    case 'SVIP显示':
                        user.svip = newValue;
                        GM_setValue('svip', newValue);
                        // 如果SVIP关闭，长期会员也应该关闭
                        if (newValue === 0 && user.pvip === 1) {
                            user.pvip = 0;
                            GM_setValue('pvip', 0);
                        }
                        break;
                    case '长期会员显示':
                        user.pvip = newValue;
                        GM_setValue('pvip', newValue);
                        // 如果长期会员开启，SVIP必须开启
                        if (newValue === 1 && user.svip === 0) {
                            user.svip = 1;
                            GM_setValue('svip', 1);
                        }
                        break;
                    case '广告控制':
                        user.ad = newValue;
                        GM_setValue('ad', newValue);
                        break;
                    case '调试模式':
                        user.debug = newValue;
                        GM_setValue('debug', newValue);
                        break;
                }

                // 刷新页面以应用更改
                setTimeout(() => location.reload(), 300);
            });

            content.appendChild(switchContainer);
        } else if (isEditable) {
            // 创建输入框
            const inputContainer = document.createElement('div');
            inputContainer.className = 'input-container';

            const inputElement = document.createElement('input');

            // 根据不同的设置项设置输入框类型和属性
            if (key === '等级') {
                inputElement.type = 'number';
                inputElement.min = 0;
                inputElement.max = 128;
                inputElement.value = value;
            } else if (key === '过期时间') {
                inputElement.type = 'datetime-local';
                // 将时间戳转换为datetime-local格式
                const date = new Date(value * 1000);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                inputElement.value = `${year}-${month}-${day}T${hours}:${minutes}`;
            } else {
                inputElement.type = 'text';
                inputElement.value = value;
            }

            inputElement.className = 'setting-input';

            // 添加保存按钮
            const saveButton = document.createElement('button');
            saveButton.textContent = '保存';
            saveButton.className = 'save-btn';

            // 保存按钮点击事件
            saveButton.addEventListener('click', () => {
                let newValue = inputElement.value;

                // 验证和转换不同类型的输入
                if (key === '等级') {
                    newValue = parseInt(newValue);
                    if (isNaN(newValue) || newValue < 0 || newValue > 128) {
                        alert('等级必须在 0-128 之间');
                        return;
                    }
                } else if (key === '过期时间') {
                    // 将datetime-local格式转换为时间戳
                    const date = new Date(newValue);
                    if (isNaN(date.getTime())) {
                        alert('请输入有效的日期时间');
                        return;
                    }
                    newValue = Math.floor(date.getTime() / 1000);
                } else if (key === '头像' && newValue && !newValue.match(/^https?:\/\/.+/)) {
                    if (!confirm('头像URL似乎不是有效的HTTP/HTTPS地址，是否继续保存？')) {
                        return;
                    }
                }

                // 更新配置
                switch (key) {
                    case '用户名':
                        user.name = newValue;
                        GM_setValue('name', newValue);
                        break;
                    case '头像':
                        user.photo = newValue;
                        GM_setValue('photo', newValue);
                        break;
                    case '等级':
                        user.level = newValue;
                        GM_setValue('level', newValue);
                        break;
                    case '过期时间':
                        user.endtime = newValue;
                        GM_setValue('endtime', newValue);
                        break;
                }

                // 显示保存成功提示
                saveButton.textContent = '已保存';
                saveButton.classList.add('saved');
                setTimeout(() => {
                    saveButton.textContent = '保存';
                    saveButton.classList.remove('saved');
                    location.reload();
                }, 1500);
            });

            inputContainer.appendChild(inputElement);
            inputContainer.appendChild(saveButton);
            content.appendChild(inputContainer);
        } else {
            // 非编辑项的显示
            const valueElement = document.createElement('div');
            valueElement.className = 'setting-value';
            valueElement.textContent = key === '过期时间' ? new Date(value * 1000).toLocaleString() : value;
            content.appendChild(valueElement);
        }

        item.appendChild(content);

        if (comment) {
            const commentElement = document.createElement('div');
            commentElement.className = 'setting-comment';
            commentElement.textContent = comment;
            item.appendChild(commentElement);
        }

        return item;
    };

    function createSettingsPanel() {
        // 检查是否已存在面板
        if (document.getElementById('vip-settings-panel')) {
            return;
        }

        // 创建面板容器
        const panel = document.createElement('div');
        panel.id = 'vip-settings-panel';
        panel.className = 'settings-panel';

        // 创建标题栏
        const header = document.createElement('div');
        header.className = 'panel-header';

        // 创建标题容器
        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-container';

        const title = document.createElement('h3');
        title.textContent = '123云盘脚本设置';
        titleContainer.appendChild(title);

        // 添加GitHub图标
        const githubIcon = document.createElement('a');
        githubIcon.href = 'https://github.com/QingJ01/123pan_unlock';
        githubIcon.target = '_blank';
        githubIcon.className = 'github-icon';
        githubIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; shape-rendering: geometricPrecision;">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        `;
        githubIcon.title = '访问GitHub项目';
        titleContainer.appendChild(githubIcon);

        header.appendChild(titleContainer);

        // 添加关闭按钮
        const closeButton = document.createElement('button');
        closeButton.className = 'close-btn';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => panel.remove());
        header.appendChild(closeButton);

        panel.appendChild(header);

        // 创建设置列表
        const settingsList = document.createElement('div');
        settingsList.className = 'settings-list';

        // 添加所有设置项
        const settings = [
            { key: 'VIP状态', value: user.vip, comment: '会员修改总开关' },
            { key: 'SVIP显示', value: user.svip, comment: '显示为超级会员 (关闭将自动关闭长期会员)' },
            { key: '长期会员显示', value: user.pvip, comment: '显示为长期会员 (开启将自动开启 SVIP 显示)' },
            { key: '广告控制', value: user.ad, comment: '关闭广告' },
            { key: '用户名', value: user.name, comment: '自定义用户名（支持中文、英文、数字）' },
            { key: '头像', value: user.photo, comment: '自定义头像URL（建议使用HTTPS地址）' },
            { key: '等级', value: user.level, comment: '成长容量等级（0-128，数字越大容量越大）' },
            { key: '过期时间', value: user.endtime, comment: '会员过期时间（可自定义任意时间）' },
            { key: '调试模式', value: user.debug, comment: '调试信息显示级别' }
        ];

        settings.forEach(setting => {
            settingsList.appendChild(formatSetting(setting.key, setting.value, setting.comment));
        });

        panel.appendChild(settingsList);

        // 添加交流群按钮
        const groupButton = document.createElement('a');
        groupButton.href = 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=GGU3-kUsPnz1bq-jwN7e8D41yxZ-DyI2&authKey=ujGsFKDnF5zD3j1z9krJR5xHlWWAKHOJV2oarfAgNmqZAl0xmTb45QwsqgYPPF7e&noverify=0&group_code=1035747022';
        groupButton.target = '_blank';
        groupButton.className = 'group-btn';
        groupButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>加入交流群</span>
        `;
        panel.appendChild(groupButton);

        document.body.appendChild(panel);
    }

    function addTriggerButton() {
        const trigger = document.createElement('button');
        trigger.id = 'settings-trigger';
        trigger.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        `;
        trigger.addEventListener('click', createSettingsPanel);
        document.body.appendChild(trigger);
    }

    // 添加样式 - 修复版本
    function addStyles() {
        // 先移除可能存在的旧样式
        const existingStyle = document.getElementById('vip-settings-style');
        if (existingStyle) {
            existingStyle.remove();
        }

        const style = document.createElement('style');
        style.id = 'vip-settings-style';
        style.textContent = `
            /* 全局样式 */
            .settings-panel {
                position: fixed !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                background: rgba(255, 255, 255, 0.95) !important;
                backdrop-filter: blur(20px) !important;
                -webkit-backdrop-filter: blur(20px) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 16px !important;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
                z-index: 10000 !important;
                width: 90% !important;
                max-width: 500px !important;
                max-height: 80vh !important;
                overflow: hidden !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif !important;
                color: #333 !important;
                animation: panelFadeIn 0.3s ease !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
                text-rendering: optimizeLegibility !important;
            }
            
            @keyframes panelFadeIn {
                from { opacity: 0; transform: translate(-50%, -48%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            
            .panel-header {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                padding: 16px 20px !important;
                border-bottom: 1px solid rgba(238, 238, 238, 0.6) !important;
                background: rgba(248, 249, 250, 0.8) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                border-radius: 16px 16px 0 0 !important;
            }
            
            .title-container {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
            }
            
            .panel-header h3 {
                margin: 0 !important;
                font-size: 18px !important;
                font-weight: 600 !important;
                color: #1a73e8 !important;
                text-rendering: optimizeLegibility !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
                letter-spacing: 0.01em !important;
            }
            
            .github-icon {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 30px !important;
                height: 30px !important;
                background: rgba(26, 115, 232, 0.1) !important;
                border: 1px solid rgba(26, 115, 232, 0.2) !important;
                border-radius: 6px !important;
                color: #1a73e8 !important;
                text-decoration: none !important;
                transition: all 0.3s ease !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                image-rendering: -webkit-optimize-contrast !important;
                image-rendering: crisp-edges !important;
                shape-rendering: geometricPrecision !important;
            }
            
            .github-icon:hover {
                background: rgba(26, 115, 232, 0.15) !important;
                border-color: rgba(26, 115, 232, 0.4) !important;
                transform: scale(1.05) !important;
                color: #1557b0 !important;
            }
            
            .close-btn {
                background: none !important;
                border: none !important;
                font-size: 24px !important;
                cursor: pointer !important;
                color: #70757a !important;
                padding: 0 !important;
                width: 30px !important;
                height: 30px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                border-radius: 50% !important;
                transition: background 0.2s !important;
            }
            
            .close-btn:hover {
                background: #f1f3f4 !important;
                color: #d93025 !important;
            }
            
            .settings-list {
                padding: 16px 20px !important;
                overflow-y: auto !important;
                max-height: calc(80vh - 180px) !important;
                padding-bottom: 20px !important;
            }
            
            .setting-item {
                margin-bottom: 16px !important;
                padding: 12px !important;
                background: rgba(248, 249, 250, 0.7) !important;
                backdrop-filter: blur(5px) !important;
                -webkit-backdrop-filter: blur(5px) !important;
                border-radius: 12px !important;
                border: 1px solid rgba(232, 234, 237, 0.6) !important;
                transition: all 0.3s ease !important;
            }
            
            .setting-item:hover {
                background: rgba(248, 249, 250, 0.9) !important;
                border-color: rgba(26, 115, 232, 0.3) !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
            }
            
            .setting-content {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                margin-bottom: 8px !important;
            }
            
            .setting-key {
                font-weight: 500 !important;
                flex: 1 !important;
            }
            
            .setting-value {
                color: #1a73e8 !important;
                font-weight: 500 !important;
                text-align: right !important;
            }
            
            .setting-comment {
                font-size: 12px !important;
                color: #70757a !important;
                line-height: 1.4 !important;
            }
            
            /* 开关样式 */
            .switch {
                position: relative !important;
                display: inline-block !important;
                width: 40px !important;
                height: 20px !important;
            }
            
            .switch input {
                opacity: 0 !important;
                width: 0 !important;
                height: 0 !important;
            }
            
            .slider {
                position: absolute !important;
                cursor: pointer !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                background-color: #ccc !important;
                transition: .3s !important;
            }
            
            .slider:before {
                position: absolute !important;
                content: "" !important;
                height: 16px !important;
                width: 16px !important;
                left: 2px !important;
                bottom: 2px !important;
                background-color: white !important;
                transition: .3s !important;
            }
            
            input:checked + .slider {
                background-color: #1a73e8 !important;
            }
            
            input:checked + .slider:before {
                transform: translateX(20px) !important;
            }
            
            .slider.round {
                border-radius: 34px !important;
            }
            
            .slider.round:before {
                border-radius: 50% !important;
            }
            
            /* 输入框和按钮样式 */
            .input-container {
                display: flex !important;
                gap: 8px !important;
            }
            
            .setting-input {
                padding: 6px 10px !important;
                border: 1px solid #dadce0 !important;
                border-radius: 4px !important;
                font-size: 14px !important;
                flex: 1 !important;
                min-width: 0 !important;
            }
            
            .setting-input:focus {
                outline: none !important;
                border-color: #1a73e8 !important;
            }
            
            .save-btn {
                padding: 6px 12px !important;
                background: #1a73e8 !important;
                color: white !important;
                border: none !important;
                border-radius: 4px !important;
                cursor: pointer !important;
                font-size: 12px !important;
                transition: background 0.2s !important;
                white-space: nowrap !important;
            }
            
            .save-btn:hover {
                background: #1557b0 !important;
            }
            
            .save-btn.saved {
                background: #188038 !important;
            }
            
            /* 交流群按钮 */
            .group-btn {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
                position: sticky !important;
                bottom: 0 !important;
                margin: 8px 20px 20px 20px !important;
                padding: 12px 16px !important;
                background: linear-gradient(135deg, rgba(26, 115, 232, 0.9), rgba(21, 87, 176, 0.9)) !important;
                backdrop-filter: blur(15px) !important;
                -webkit-backdrop-filter: blur(15px) !important;
                color: white !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 12px !important;
                cursor: pointer !important;
                text-decoration: none !important;
                font-weight: 500 !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2), 0 -2px 10px rgba(0, 0, 0, 0.1) !important;
                z-index: 10 !important;
            }
            
            .group-btn:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 8px 20px rgba(26, 115, 232, 0.4), 0 -4px 15px rgba(0, 0, 0, 0.15) !important;
                background: linear-gradient(135deg, rgba(26, 115, 232, 1), rgba(21, 87, 176, 1)) !important;
            }
            
            /* 触发按钮 */
            #settings-trigger {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                width: 54px !important;
                height: 54px !important;
                background: rgba(26, 115, 232, 0.9) !important;
                backdrop-filter: blur(15px) !important;
                -webkit-backdrop-filter: blur(15px) !important;
                color: white !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 50% !important;
                cursor: pointer !important;
                z-index: 9999 !important;
                box-shadow: 0 6px 20px rgba(26, 115, 232, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: all 0.3s ease !important;
            }
            
            #settings-trigger:hover {
                background: rgba(21, 87, 176, 0.95) !important;
                transform: scale(1.05) rotate(90deg) !important;
                box-shadow: 0 8px 25px rgba(26, 115, 232, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
            }
            
                /* 响应式设计 */
                @media (max-width: 600px) {
                    .settings-panel {
                        width: 95% !important;
                        max-height: 85vh !important;
                    }
                    
                    .panel-header {
                        padding: 14px 16px !important;
                    }
                    
                    .settings-list {
                        padding: 12px 16px !important;
                        max-height: calc(85vh - 160px) !important;
                        padding-bottom: 16px !important;
                    }
                    
                    .setting-content {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 8px !important;
                    }
                    
                    .input-container {
                        width: 100% !important;
                    }
                    
                    .group-btn {
                        margin: 8px 16px 16px 16px !important;
                        padding: 10px 14px !important;
                    }
                    
                    .title-container {
                        gap: 8px !important;
                    }
                    
                    .github-icon {
                        width: 28px !important;
                        height: 28px !important;
                    }
                    
                    .github-icon svg {
                        width: 18px !important;
                        height: 18px !important;
                    }
                    
                    #settings-trigger {
                        bottom: 16px !important;
                        right: 16px !important;
                        width: 44px !important;
                        height: 44px !important;
                    }
                }
        `;
        document.head.appendChild(style);
    }

    // 注册菜单命令
    GM_registerMenuCommand('⚙️ 打开设置面板', createSettingsPanel);

    // 等待页面加载完成
    function waitForBody() {
        if (document.body) {
            addStyles(); // 先添加样式
            addTriggerButton(); // 再添加按钮
        } else {
            setTimeout(waitForBody, 100);
        }
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForBody);
    } else {
        waitForBody();
    }

    // 输出版本信息
    console.log('[123云盘解锁] v1.1.3 已加载完成');
})();